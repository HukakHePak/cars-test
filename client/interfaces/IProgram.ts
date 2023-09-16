import IParameter from "./IParameter"

interface IProgram {
  name: String
  target?: String
  description?: String
  parameters: IParameter[]
}

export default IProgram
