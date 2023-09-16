import { ICar } from "schemas/car"
import parser from "./parser"
import { PROGRAMS, REST_API } from "./consts"
import api, { ISortQuery } from "./api"
import { Response } from "node-fetch"
import moment from "moment"

async function messageHandler (request: Promise<Response>) {   
  if (!request) {
    console.error("bad args")
    return
  }

  const response = await request
  const message = await response.text()

  if(response.status === 200) {
    console.log(JSON.parse(message))
  } else {
    console.error({
      code: response.status,
      message
    })
  }

  
    // request.then(data => {console.log(data); return data.text()}).then(data => {console.log(data); return data})
    
    // request .then(response => {
    //     const jsonPromise = response.json();
    //     const textPromise = response.text();
    //     return Promise.all([jsonPromise, textPromise]);
    //   }).then(console.log)
    // .catch(console.error);

    // request
    //     .then(data => {
    //         try {
    //             return data.json()
    //         } catch (e) {
    //             return data
    //         }
    //     })
    //   .then(console.log)
    //   .catch(console.error)

}

  export default messageHandler