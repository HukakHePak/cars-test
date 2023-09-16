import { ICar } from "schemas/car"
import parser from "./parser"
import { PROGRAMS, REST_API } from "./consts"
import api, { ISortQuery } from "./api"
import { Response } from "node-fetch"
import moment from "moment"

async function messageHandler (data: String) {
    const args = parser(data)
    const params = args.parameters
  
    let request: Promise<Response> | null = null
  
    let car = {} as ICar
  
    switch (args.program) {
      case REST_API.GET:
        request = api.get(<ISortQuery>{
          sortBy: params.get("by"),
          sortTo: params.get("to")
        })
        break
      case REST_API.PUT:
        car._id = params.get("id")
      case REST_API.POST:
        car.brand = params.get("brand")
        car.model = params.get("model")
        car.price = parseInt(params.get("price"))
        car.productionDate = moment(params.get("date"), "DD.MM.YYYY").toDate()
        car.color = params.get("color")
  
        request = api.post(car)
        break
      case REST_API.DELETE:
        request = api.delete(params.get("id"))
        break
      case PROGRAMS.QUIT:
      case PROGRAMS.EXIT:
        console.log("Goodbye")
        return
      default:
        break
    }
  
    if (!request) {
      console.error("bad args")
      return
    }
  
    request
      .then((data) => data.json())
      .then(console.log)
      .catch(console.error)
  }

  export default messageHandler