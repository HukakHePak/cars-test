import dotenv from "dotenv"
dotenv.config()

import interpreter from "./core/interpreter"

interpreter("get");

process.stdin.resume()
process.stdin.setEncoding("utf8")
process.stdin.on("data", interpreter)
