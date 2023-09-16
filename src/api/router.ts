import express from "express"
import carsRoute from "./routes/cars"
import downloadRoute from "./routes/download"
import errorHandler from "./middleware/errorHandler"
import publicRoute from "./routes/public"
const router = express.Router()

router.use("/download", downloadRoute)
router.use("/api", carsRoute)
router.use("/", publicRoute)
router.use(errorHandler)

export default router
