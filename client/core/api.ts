import fetch from "node-fetch"
import { API_URL, REST_API } from "./consts"

export type ISortQuery = { sortBy: string; sortTo: string }

function get(sortQuery: ISortQuery) {
  const query = new URLSearchParams(sortQuery)

  try {
    return fetch(`${API_URL}/?${query}`)
  } catch (e) {
    console.error(e)
    return null
  }
}

function post(data: Object) {
  try {
    return fetch(API_URL, {
      method: REST_API.POST,
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    })
  } catch (e) {
    console.error(e)
    return null
  }
}

function _delete(id: string) {
  try {
    return fetch(`${API_URL}/${id}`, {
      method: REST_API.DELETE
    })
  } catch (e) {
    console.error(e)
    return null
  }
}

const api = {
  get,
  post,
  delete: _delete
}

export default api
