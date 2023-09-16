import { ICar } from "schemas/car"
import parser from "./parser"
import { PROGRAMS, REST_API } from "../constants/consts"
import api, { ISortQuery } from "./api"
import { Response } from "node-fetch"
import moment from "moment"
import messageHandler from "./messageHandler"

function interpreter (data: String) {
    const args = parser(data)

    console.log(args);
    return;

    if(!args.program) {
        console.error("bad command")    // TODO: show help
        return;
    }
    
    const params = args.parameters
  
    let request: Promise<Response> | null = null
  
    let car = {} as ICar
  
    switch (args.program.name) {
      case REST_API.GET:
        request = api.get(<ISortQuery>{
          sortBy: params.get("by"),
          sortTo: params.get("to")
        })
        break

      case REST_API.PUT:
        car._id = params.get("id")
        car.brand = params.get("brand")
        car.model = params.get("model")
        car.price = parseInt(params.get("price"))
        car.productionDate = moment(params.get("date"), "DD.MM.YYYY").toDate()
        car.color = params.get("color")

        request = api.put(car)
        break

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
        process.exit();

      default:
        break
    }

    messageHandler(request);
  }

  export default interpreter