import dotenv from "dotenv"
dotenv.config()

import messageHandler from "./core/messageHandler"

messageHandler("get");

process.stdin.resume()
process.stdin.setEncoding("utf8")
process.stdin.on("data", messageHandler)
