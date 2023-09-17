import { CarParameters } from "models/car"
import IProgram from "../interfaces/IProgram"
import { IdParameters, PROGRAMS, QueryParameters, TARGETS } from "./consts"

const programs: IProgram[] = [
  {
    name: `get-${TARGETS.CARS}s`,
    action: PROGRAMS.GET,
    parameters: QueryParameters,
    description: "Show car list"
  },
  {
    name: `create-${TARGETS.CARS}`,
    action: PROGRAMS.POST,
    parameters: CarParameters,
    description: "Add new car"
  },
  {
    name: `edit-${TARGETS.CARS}`,
    action: PROGRAMS.PUT,
    parameters: [...IdParameters, ...CarParameters],
    description: "Edit car by id, -id is required"
  },
  {
    name: `delete-${TARGETS.CARS}`,
    action: PROGRAMS.DELETE,
    parameters: IdParameters,
    description: "Remove car from list, -id is required"
  },
  {
    name: PROGRAMS.EXIT,
    action: PROGRAMS.EXIT,
    parameters: [],
  },
  {
    name: PROGRAMS.QUIT,
    action: PROGRAMS.QUIT,
    parameters: [],
    description: "Exit app"
  },
  {
    name: PROGRAMS.HELP,
    action: PROGRAMS.HELP,
    parameters: [],
    description: "Help"
  }
]

export default programs
