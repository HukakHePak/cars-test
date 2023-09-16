import express, { Request, Response } from "express"

const router = express.Router()

router.get("/", (req: Request, res: Response) => {
  res.send() // TODO: download app
})

const downloadRoute = router

export default downloadRoute
