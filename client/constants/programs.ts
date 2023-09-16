import IProgram from "../interfaces/IProgram";
import { PROGRAMS } from "./consts";


const programs: IProgram[] = [
    {
        name: 'POST',
        parameters: [
            {
                name: 'brand',
                short: 'b',
                type: String,
                field: "brand"
            },
            {
                name: 'price',
                short: 'p',
                type: Number,
                field: "price"
            }
        ]
    },
    {
        name: 'PUT',
        parameters: [
            {
                name: 'brand',
                short: 'b',
                type: Date,
                field: "brand"
            }
        ]
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