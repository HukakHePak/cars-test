import dotenv from "dotenv"
dotenv.config()

import interpreter from "./core/interpreter"

interpreter("get-cars")

process.stdin.resume()
process.stdin.setEncoding("utf8")
process.stdin.on("data", interpreter)
