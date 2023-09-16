import express, { Request, Response } from "express"
import Car, { ICar } from "schemas/car"

const router = express.Router()

router.get("/", async (req: Request, res: Response) => {
  // const { sortMethod, sortDirection } = req.query;
  console.log(req.query)
  const cars: ICar[] = await Car.find()

  res.send(cars)
})

router.post("/", async (req: Request, res: Response) => {
  console.log(req.body)
  const car: ICar = req.body

  const data = await Car.create(car)

  res.send({ message: "OK", data })
})

router.put("/", async (req: Request, res: Response) => {
  const car: ICar = req.body

  if (!car._id) {
    res.sendStatus(404)
    return;
  }

  const data = await Car.findOneAndUpdate({ _id: car._id }, car)

  res.send({ message: "OK", data })
})

router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params

  const data = await Car.findByIdAndRemove(id)
  console.log(data)

  res.send({ message: "OK" })
})

export default router
