import { CarParameters, ICar } from "models/car";
import IProgram from "../interfaces/IProgram";
import { IdParameters, PROGRAMS, QueryParameters, TARGETS } from "./consts";
import ISortQuery from "../interfaces/ISortQuery";
// import { SortQuery } from "../interfaces/ISortQuery";



const programs: IProgram<ICar>[] = [
    {
        name: PROGRAMS.GET,
        target: TARGETS.CARS,
        parameters: QueryParameters,
        // type: new ICar
    },
    {
        name: PROGRAMS.POST,
        target: TARGETS.CARS,
        parameters: CarParameters,
        type: new ICar
    },
    {
        name: PROGRAMS.PUT,
        target: TARGETS.CARS,
        parameters: CarParameters,
        // type: new ICar
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
        parameters: [],
    }
]

export default programs;