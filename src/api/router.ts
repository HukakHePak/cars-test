import express from "express"
import cars from "./routes/cars"

const router = express.Router()

router.use("/", cars)

export default router
