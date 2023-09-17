import safe from "api/middleware/safe"
import express, { Request, Response } from "express"
import createHttpError from "http-errors"
import { SortOrder } from "mongoose"
import Car, { ICar } from "models/car"

const router = express.Router()

router.get("/", safe(async (req: Request, res: Response) => {
    const { sortBy, sortTo } = req.query

    const sortQuery = {
      [sortBy == "undefined" ? "createdAt" : (sortBy as string)]: sortTo == "undefined" ? -1 : (sortTo as SortOrder)
    }

    const cars: ICar[] = await Car.find({ deletedAt: null }).sort(sortQuery).select({ __v: 0 })

    res.send(cars)
  })
)

router.post("/", safe(async (req: Request, res: Response) => {
    const car: ICar = req.body

    const data = await Car.create(car)

    res.send(data)
  })
)

router.put("/", safe(async (req: Request, res: Response) => {
    const car: ICar = req.body

    if (!car._id) {
      throw createHttpError(400, "_id is not defined")
    }

    const data = await Car.findOneAndUpdate({ _id: car._id }, car)

    res.send(data._id)
  })
)

router.delete("/:id", safe(async (req: Request, res: Response) => {
    const data = await Car.findByIdAndUpdate(req.params.id, { deletedAt: Date.now() })

    res.send(data._id)
  })
)

const carsRoute = router

export default carsRoute
