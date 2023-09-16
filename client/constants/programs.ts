import { CarParameters } from "models/car";
import IProgram from "../interfaces/IProgram";
import { PROGRAMS } from "./consts";


const programs: IProgram[] = [
    {
        name: 'POST',
        parameters: CarParameters
    },
    {
        name: 'PUT',
        parameters: CarParameters
    },
    {
        name: 'HELP',
        parameters: [
            {
                name: 'command',
                short: 'c',
                type: Number,
                field: "command"
            }
        ]
    },
    {
        name: 'EXIT',
        parameters: [],
    }
]

export default programs;