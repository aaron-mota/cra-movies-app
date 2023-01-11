import axios from "axios"


///////////////////
// HELPER FUNCTIONS
///////////////////


///////////////////
// MAIN
///////////////////

// SINGLE
///////////////////

// CREATE
export const createDoc = async (doc, collection, controller, consoleLog = false) => {
  const response = await axios.post(`/${collection}`, {doc: doc}, {signal: controller.signal})
  if (consoleLog) {
    console.log(`createDoc (${collection}): `, response.data)
  }
  return response.data
}

// READ
export const getDoc = async (id, collection, controller, consoleLog = false) => {
  const response = await axios.get(`/${collection}/${id}`, {signal: controller.signal})
  if (consoleLog) {
    console.log(`getDoc (${collection}): `, response.data)
  }
  return response.data
}

// UPDATE
export const updateDoc = async (doc, collection, controller, consoleLog = false) => {
  const response = await axios.put(`/${collection}/${doc.id}`, {doc: doc}, {signal: controller.signal})
  if (consoleLog) {
    console.log(`updateDoc (${collection}): `, response.data)
  }
  return response.data
}

// DELETE
export const deleteDoc = async (id, collection, controller, consoleLog = false) => {
  const response = await axios.delete(`/${collection}/${id}`, {signal: controller.signal})
  if (consoleLog) {
    console.log(`deleteDoc (${collection}): `, response.data)
  }
  return response.data
}


// MANY
///////////////////

// GET MANY
export const getDocs = async (collection, controller, consoleLog = false) => {
  const response = await axios.get(`/${collection}`, {signal: controller.signal})
  if (consoleLog) {
    console.log(`getDocs (${collection}): `, response.data)
  }
  return response.data
}