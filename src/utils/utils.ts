import { PARAMS_SIGN } from "../../client/core/consts"

export function ArrayOf(str: string, length: number) {
  return Array.from({ length }).map(() => str)
}

export function successConnectLog(log: string) {
  console.log(`Successfully connected to ${log}.`)
}

export function ErrorConnect(log: string) {
  return new Error(`${log} init connection error.`)
}

export function filterParameter (parameterName: string) {
  return parameterName.split(PARAMS_SIGN).join("").toLowerCase();
}