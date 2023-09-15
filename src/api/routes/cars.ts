import express, { Request, Response } from "express"
import Car, { ICar } from "models/car"

const router = express.Router()

router.get("/", async (req: Request, res: Response) => {
  const cars:ICar[] = await Car.find();

  res.send(cars)
})

export default router
