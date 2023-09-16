import express from "express"
import mongo from "./mongo"
import mongoose from "mongoose"
import cors from "cors"

const app = express()

import dotenv from "dotenv"
dotenv.config()

import router from "./api/router"
import { successConnectLog, ErrorConnect } from "./utils/utils"

app.use(cors({
  origin: "*"
}))

app.use(express.json())

const port = process.env.PORT || 3000

app.listen(port, () => {
  mongo.connect((err: mongoose.Error, db: mongoose.Connection) => {
    if (!db || err) {
      throw ErrorConnect("MongoDB")
    }
    successConnectLog("MongoDB")
  })

  mongoose
    .connect(process.env.MONGOOSE || "")
    .then(() => successConnectLog("Mongoose"))
    .catch(() => {
      throw ErrorConnect("Mongoose")
    })

  // app.use("/public/", express.static("./public"))

  app.use("/", router)

  console.log(`Server is running on port: ${port}`)
})
