import fetch, { RequestInfo, RequestInit, Response } from "node-fetch"
import { API_URL, REST_API } from "./consts"

export type ISortQuery = { sortBy: string | ""; sortTo: string | ""}

function get(sortQuery: ISortQuery) {
  const query = new URLSearchParams(sortQuery)

  return fetch(`${API_URL}?${query}`)
}

function post(data: Object) {

    return fetch(API_URL, {
      method: REST_API.POST,
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    })
}

function put(data: Object) {
    return fetch(API_URL, {
      method: REST_API.PUT,
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    })
}

function _delete(id: string) {
    return fetch(`${API_URL}/${id || ""}`, {
      method: REST_API.DELETE
    })
}

const api = {
  get,
  post,
  put,
  delete: _delete
}

export default api
