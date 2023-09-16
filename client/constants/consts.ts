import IParameter from "../interfaces/IParameter";

export const API_URL = process.env.APP_API || "https://note-lawn.ru"

export const PARAMS_SIGN = "-";

export const IdParameters: IParameter[] = [{
    name: "id",
    short: "i",
    type: String,
    field: "_id"
  }
]

export const QueryParameters: IParameter[] = [
  {
    name: "sortBy",
    short: "by",
    type: String,
    field: "sortBy"
  },
  {
    name: "sortTo",
    short: "to",
    type: Number,
    field: "sortTo"
  }
]

export const TARGETS = {
  CARS: "CARS"
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
