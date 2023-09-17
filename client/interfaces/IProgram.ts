import IParameter from "./IParameter"

interface IProgram {
  name: String
  action: String
  description?: String
  parameters: IParameter[]
}

export default IProgram
