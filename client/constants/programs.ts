import { CarParameters } from "models/car"
import IProgram from "../interfaces/IProgram"
import { IdParameters, PROGRAMS, QueryParameters, TARGETS } from "./consts"

const programs: IProgram[] = [
  {
    name: PROGRAMS.GET,
    target: TARGETS.CARS,
    parameters: QueryParameters,
    description: "Show car list"
  },
  {
    name: PROGRAMS.POST,
    target: TARGETS.CARS,
    parameters: CarParameters,
    description: "Add new car"
  },
  {
    name: PROGRAMS.PUT,
    target: TARGETS.CARS,
    parameters: CarParameters,
    description: "Edit car by id, -id is required"
  },
  {
    name: PROGRAMS.DELETE,
    target: TARGETS.CARS,
    parameters: IdParameters,
    description: "Remove car from list, -id is required"
  },
  {
    name: PROGRAMS.EXIT,
    parameters: [],
    description: "Exit app"
  },
  {
    name: PROGRAMS.QUIT,
    parameters: [],
    description: "Exit app"
  },
  {
    name: PROGRAMS.HELP,
    parameters: [],
    description: "Help"
  }
]

export default programs
