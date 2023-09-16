import { Response } from "node-fetch"

async function messageHandler(request: Promise<Response>) {
  const response = await request

  if (!response) {
    console.error("bad request")
    return
  }

  const message = await response.text()

  if (response.status === 200) {
    console.log(JSON.parse(message))
  } else {
    console.error({
      code: response.status,
      message
    })
  }
}

export default messageHandler
