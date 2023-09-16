import parser from "./parser"
import { PROGRAMS } from "../constants/consts"
import api from "./api"
import { Response } from "node-fetch"
import messageHandler from "./messageHandler"
import ISortQuery from "../interfaces/ISortQuery"

function interpreter(data: String) {
  const { program, parameters } = parser(data)

  if (!program) {
    console.error("bad command") // TODO: show help
    return
  }

  let request: Promise<Response> | null = null

  const body = Object.fromEntries(parameters.entries())

  switch (program.name) {
    case PROGRAMS.GET:
      request = api.get(<ISortQuery>body)
      break

    case PROGRAMS.PUT:
      request = api.put(body)
      break

    case PROGRAMS.POST:
      request = api.post(body)
      break

    case PROGRAMS.DELETE:
      request = api.delete(body.id)
      break

    case PROGRAMS.QUIT:
    case PROGRAMS.EXIT:
      console.log("Goodbye")
      process.exit()

    default:
      break
  }

  messageHandler(request)
}

export default interpreter
