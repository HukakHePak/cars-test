import { PARAMS_SIGN } from "../constants/consts"

export function filterParameter(parameterName: string | String): string {
  return parameterName.split(PARAMS_SIGN).join("").toLowerCase()
}
