// HELPER FUNCTIONS
const handleResponseType = async (response) => {
  const text = await response.text()
  try{
    const json = JSON.parse(text)
    return json
  } catch(err) {
    return text
  }
}


// MAIN
export const getDocs = async (controller, consoleLog = false) => {
  let response = await fetch('/docs', {signal: controller.signal})
  response = await handleResponseType(response)
  if (consoleLog) {
    console.log("retrievededDocs (docs): ", typeof response, response)
  }
  return response
}
