import IProgram from "./IProgram"

interface IProgramParameters {
  program: IProgram
  parameters: Map<string, Date | Number | String>
}

export default IProgramParameters
