import fetch from "node-fetch"
import { API_URL, REST_API } from "./consts"

export type ISortQuery = { sortBy: string; sortTo: string }

function get(sortQuery: ISortQuery) {
  const query = new URLSearchParams(sortQuery)

  return fetch(API_URL + "/?" + query)
}

function post(data: Object) {

    console.log(data)
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

function _delete(data: Object) {
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

const api = {
  get,
  post,
  delete: _delete
}

export default api
