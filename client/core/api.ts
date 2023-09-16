import fetch from "node-fetch"
import { API_URL } from "../constants/consts"
import ISortQuery from "../interfaces/ISortQuery"

function get(sortQuery: ISortQuery) {
  const query = new URLSearchParams(sortQuery)

  return fetch(`${API_URL}?${query}`)
}

function post(data: Object) {

    return fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    })
}

function put(data: Object) {
    return fetch(API_URL, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    })
}

function _delete(id: string) {
    return fetch(`${API_URL}/${id || ""}`, {
      method: 'DELETE'
    })
}

const api = {
  get,
  post,
  put,
  delete: _delete
}

export default api
