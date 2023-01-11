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
export const createDoc = async (doc, controller, consoleLog = false) => {
  const response = await axios.post(`/docs`, {doc: doc}, {signal: controller.signal})
  if (consoleLog) {
    console.log("createDoc (doc): ", response.data)
  }
  return response.data
}

// READ
export const getDoc = async (id, controller, consoleLog = false) => {
  const response = await axios.get(`/docs/${id}`, {signal: controller.signal})
  if (consoleLog) {
    console.log("getDoc (doc): ", response.data)
  }
  return response.data
}

// UPDATE
export const updateDoc = async (doc, controller, consoleLog = false) => {
  const response = await axios.put(`/docs/${doc.id}`, {doc: doc}, {signal: controller.signal})
  if (consoleLog) {
    console.log("updateDoc (doc): ", response.data)
  }
  return response.data
}

// DELETE
export const deleteDoc = async (id, controller, consoleLog = false) => {
  const response = await axios.delete(`/docs/${id}`, {signal: controller.signal})
  if (consoleLog) {
    console.log("deleteDoc (doc): ", response.data)
  }
  return response.data
}


// MANY
///////////////////

// GET MANY
export const getDocs = async (controller, consoleLog = false) => {
  const response = await axios.get('/docs', {signal: controller.signal})
  if (consoleLog) {
    console.log("getDocs (docs): ", response.data)
  }
  return response.data
}