import { ICar } from "models/car"
import parser from "./parser"
import { PROGRAMS } from "../constants/consts"
import api from "./api"
import { Response } from "node-fetch"
import moment from "moment"
import messageHandler from "./messageHandler"
import ISortQuery from "../interfaces/ISortQuery"

function interpreter (data: String) {
    const { program, parameters } = parser(data)

    console.log(program, parameters);
    // return;

    if(!program) {
        console.error("bad command")    // TODO: show help
        return;
    }
    
    const params = parameters
  
    let request: Promise<Response> | null = null
  
    let car = {} as ICar

    const type = program.type;

    const body = {} as typeof type

    program.parameters.forEach( parameter => {
        body[parameter.field as string] = parameters.get(parameter.name)
    });
  
    switch (program.name) {
      case PROGRAMS.GET:
        request = api.get(<ISortQuery>{
          sortBy: params.get("by"),
          sortTo: params.get("to")
        })
        break

      case PROGRAMS.PUT:
        request = api.put(body)
        break

      case PROGRAMS.POST:
        car.brand = params.get("brand")
        car.model = params.get("model")
        car.price = parseInt(params.get("price"))
        car.productionDate = moment(params.get("date"), "DD.MM.YYYY").toDate()
        car.color = params.get("color")
  
        request = api.post(car)
        break

      case PROGRAMS.DELETE:
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