import IParameter from "./IParameter"

interface IProgram<T> {
    name: String
    target?: String
    description?: String
    parameters: IParameter[]
    type?: T
}

export default IProgram