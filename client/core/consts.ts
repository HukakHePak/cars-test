export const API_URL = process.env.APP_API || "https://note-lawn.ru"

export const PARAMS_LIMIT = 100;
export const PARAMS_SIGN = "-";

export const REST_API = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE"
}

export const PROGRAMS = {
    QUIT: "QUIT",
    EXIT: "EXIT",
    "GET-CARS": "GET-CARS",
    "POST-CARS": "POST-CARS",
    "PUT-CARS": "PUT-CARS",
    "DELETE-CARS": "DELETE-CARS"
}

export enum PARAMETER_TYPES {
    String,
    Number,
    Date,
    Array
}

