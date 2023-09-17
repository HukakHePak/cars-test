import parser from "./parser"
import { PROGRAMS } from "../constants/consts"
import api from "./api"
import { Response } from "node-fetch"
import messageHandler from "../helpers/messageHandler"
import ISortQuery from "../interfaces/ISortQuery"
import printHelp from "../helpers/printHelp"

function interpreter(data: String): void {
  const { program, parameters } = parser(data)

  if (!program) {
    console.error("bad command. write help for see avialable commands")
    return
  }

  let request: Promise<Response> | null = null

  const body = Object.fromEntries(parameters.entries())

  switch (program.action) {
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
      request = api.delete(body._id as String)
      break

    case PROGRAMS.QUIT:
    case PROGRAMS.EXIT:
      process.exit()

    case PROGRAMS.HELP:
      printHelp()
      return

    default:
      break
  }

  messageHandler(request)
}

export default interpreter
