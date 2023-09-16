import express from "express"
import carsRoute from "./routes/cars"
import downloadRoute from "./routes/download"
import errorHandler from "./middleware/errorHandler"
const router = express.Router()

router.use("/download", downloadRoute)
router.use("/", carsRoute)
router.use(errorHandler)

export default router
