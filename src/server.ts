import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express()

import dotenv from "dotenv"
dotenv.config()

import router from "./api/router"

app.use(
  cors({
    origin: "*"
  })
)

app.use(express.json())

const port = process.env.PORT || 3000

app.listen(port, ():void => {
  mongoose
    .connect(process.env.MONGO || "mongodb://127.0.0.1:27017/cars")
    .then(() => console.log(`Successfully connected to Mongoose`))
    .catch(() => {
      console.error("Mongoose init connection error")
    })

  app.use("/", router)

  console.log(`Server is running on port: ${port}`)
})
