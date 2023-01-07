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

// GET MANY
export const getDocs = async (controller, consoleLog = false) => {
  let response = await fetch('/docs', {signal: controller.signal})
  response = await handleResponseType(response)
  if (consoleLog) {
    console.log("getDocs (docs): ", typeof response, response)
  }
  return response
}

// GET SINGLE
export const getDoc = async (id, controller, consoleLog = false) => {
  let response = await fetch(`/docs/${id}`, {signal: controller.signal})
  response = await handleResponseType(response)
  if (consoleLog) {
    console.log("getDoc (doc): ", response)
  }
  return response
}


// UPDATE SINGLE
export const updateDoc = async (controller, consoleLog = false) => {
  // const response = await axios.get('/docs', {signal: controller.signal})
  // if (consoleLog) {
  //   console.log("retrievededDocs (docs): ", response.data)
  // }
  // return response.data
}
