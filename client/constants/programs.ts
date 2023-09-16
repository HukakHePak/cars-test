import { CarParameters } from "models/car"
import IProgram from "../interfaces/IProgram"
import { IdParameters, PROGRAMS, QueryParameters, TARGETS } from "./consts"

const programs: IProgram[] = [
  {
    name: PROGRAMS.GET,
    target: TARGETS.CARS,
    parameters: QueryParameters
  },
  {
    name: PROGRAMS.POST,
    target: TARGETS.CARS,
    parameters: CarParameters
  },
  {
    name: PROGRAMS.PUT,
    target: TARGETS.CARS,
    parameters: CarParameters
  },
  {
    name: PROGRAMS.DELETE,
    target: TARGETS.CARS,
    parameters: IdParameters
  },
  {
    name: PROGRAMS.EXIT,
    parameters: []
  },
  {
    name: PROGRAMS.QUIT,
    parameters: []
  },
  {
    name: PROGRAMS.HELP,
    parameters: []
  }
]

export default programs
