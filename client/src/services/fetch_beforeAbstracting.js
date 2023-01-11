///////////////////
// HELPER FUNCTIONS
///////////////////
const handleResponseType = async (response) => {
  const text = await response.text()
  try{
    const json = JSON.parse(text)
    return json
  } catch(err) {
    return text
  }
}


///////////////////
// MAIN
///////////////////

// SINGLE
///////////////////


// CREATE
export const createDoc = async (doc, controller, consoleLog = false) => {
  let response = await fetch(`/docs`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({doc: doc}),
    signal: controller.signal
  })
  response = await handleResponseType(response)
  if (consoleLog) {
    console.log("createDoc (doc): ", response)
  }
  return response
}

// READ
export const getDoc = async (id, controller, consoleLog = false) => {
  let response = await fetch(`/docs/${id}`, {signal: controller.signal})
  response = await handleResponseType(response)
  if (consoleLog) {
    console.log("getDoc (doc): ", response)
  }
  return response
}

// UPDATE
export const updateDoc = async (doc, controller, consoleLog = false) => {
  let response = await fetch(`/docs/${doc.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({doc: doc}),
    signal: controller.signal
  })
  response = await handleResponseType(response)
  if (consoleLog) {
    console.log("updateDoc (doc): ", response)
  }
  return response
}

// DELETE
export const deleteDoc = async (id, controller, consoleLog = false) => {
  let response = await fetch(`/docs/${id}`, {method: 'DELETE', signal: controller.signal})
  response = Boolean(await handleResponseType(response))
  if (consoleLog) {
    console.log("deleteDoc (doc): ", typeof response, response)
  }
  return response
}


// MANY
///////////////////

// GET MANY
export const getDocs = async (controller, consoleLog = false) => {
  let response = await fetch('/docs', {signal: controller.signal})
  response = await handleResponseType(response)
  if (consoleLog) {
    console.log("getDocs (docs): ", typeof response, response)
  }
  return response
}
