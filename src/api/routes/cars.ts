import express, { Request, Response } from "express"
import { SortOrder } from "mongoose"
import Car, { ICar } from "schemas/car"

const router = express.Router()

router.get("/", async (req: Request, res: Response) => {
  const { sortBy, sortTo } = req.query

  const sortQuery = {
    [sortBy == "undefined" ? (sortBy as string) : "createdAt"]: sortTo == "undefined" ? (sortTo as SortOrder) : -1
  }

  const cars: ICar[] = await Car.find({ deletedAt: null }).sort(sortQuery)

  res.send(cars)
})

router.post("/", async (req: Request, res: Response) => {
  const car: ICar = req.body

  const data = await Car.create(car)

  if (data) {
    res.send({ message: "OK", data })
  } else {
    res.sendStatus(404)
  }
})

router.put("/", async (req: Request, res: Response) => {
  const car: ICar = req.body

  if (!car._id) {
    res.sendStatus(404)
    return
  }

  const data = await Car.findOneAndUpdate({ _id: car._id }, car)

  if (data) {
    res.send({ message: "OK", data: { id: data._id } })
  } else {
    res.sendStatus(404)
  }
})

router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params

  const data = await Car.findByIdAndUpdate(id, { deletedAt: Date.now() })

  if (data) {
    res.send({ message: "OK", data: { id: data._id } })
  } else {
    res.sendStatus(404)
  }
})

const carsRoute = router

export default carsRoute
