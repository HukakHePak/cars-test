import IParameter from "./IParameter"

interface IProgram {
    name: String
    parameters: IParameter<StringConstructor | NumberConstructor | DateConstructor>[]
}

export default IProgram