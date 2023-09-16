import express from "express"

const router = express.Router()

router.use(express.static("./public/"))

const publicRoute = router

export default publicRoute
