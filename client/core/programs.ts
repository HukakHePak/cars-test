import { PARAMETER_TYPES, PROGRAMS } from "./consts";

const programs = [
    {
        name: 'POST',
        parameters: [
            {
                name: 'brand',
                short: 'b',
                type: PARAMETER_TYPES.String,
                field: "brand"
            }
        ]
    },
    {
        name: 'PUT',
        parameters: [
            {
                name: 'brand',
                short: 'b',
                type: PARAMETER_TYPES.String,
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
                type: PARAMETER_TYPES.String,
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