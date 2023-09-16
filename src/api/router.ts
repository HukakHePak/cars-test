import express from "express"
import carsRoute from "./routes/cars"
import downloadRoute from "./routes/download"

const router = express.Router()

router.use("/download", downloadRoute)
router.use("/", carsRoute) // TODO: catch midleware

export default router
