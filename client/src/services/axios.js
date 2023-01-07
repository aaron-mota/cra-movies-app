import axios from "axios"


// HELPER FUNCTIONS


// MAIN
export const getDocs = async (controller, consoleLog = false) => {
  const response = await axios.get('/docs', {signal: controller.signal})
  if (consoleLog) {
    console.log("retrievededDocs (docs): ", response.data)
  }
  return response.data
}
