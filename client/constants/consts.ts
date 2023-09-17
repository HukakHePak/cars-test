import IParameter from "../interfaces/IParameter"

export const API_URL = process.env.APP_API || "https://note-lawn.ru/api"

export const PARAMS_SIGN = "-"

export const IdParameters: IParameter[] = [
  {
    name: "id",
    short: "i",
    type: String,
    field: "_id",
    description: "Id, required for update/delete programs"
  }
]

export const QueryParameters: IParameter[] = [
  {
    name: "sortBy",
    short: "by",
    type: String,
    field: "sortBy",
    description: "Write name of field for sorting, example: -sortBy models"
  },
  {
    name: "sortTo",
    short: "to",
    type: Number,
    field: "sortTo",
    description: "Number of sort direction. 1 asc, -1 desc. example: -to 1"
  }
]

export const TARGETS = {
  CARS: "car"
}

export const PROGRAMS = {
  HELP: "HELP",
  QUIT: "QUIT",
  EXIT: "EXIT",
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE"
}
