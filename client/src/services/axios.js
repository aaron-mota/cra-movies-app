import axios from "axios"


///////////////////
// HELPER FUNCTIONS
///////////////////


///////////////////
// MAIN
///////////////////

// GET MANY
export const getDocs = async (controller, consoleLog = false) => {
  const response = await axios.get('/docs', {signal: controller.signal})
  if (consoleLog) {
    console.log("getDocs (docs): ", response.data)
  }
  return response.data
}

// GET SINGLE
export const getDoc = async (id, controller, consoleLog = false) => {
  const response = await axios.get(`/docs/${id}`, {signal: controller.signal})
  if (consoleLog) {
    console.log("getDoc (doc): ", response.data)
  }
  return response.data
}

// UPDATE SINGLE
export const updateDoc = async (doc, controller, consoleLog = false) => {
  const response = await axios.put(`/docs/${doc.id}`, {doc: doc}, {signal: controller.signal})
  if (consoleLog) {
    console.log("updateDoc (doc): ", response.data)
  }
  return response.data
}
