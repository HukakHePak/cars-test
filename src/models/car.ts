import mongoose from "mongoose"
import IParameter from "../../client/interfaces/IParameter"

export class ICar extends mongoose.Document {
  brand: String
  model: String
  price: Number
  productionDate: Date
  createdAt: Date
  deletedAt: Date
  color: String
}

export const CarSchema = new mongoose.Schema({
  brand: String,
  model: String,
  price: Number,
  productionDate: Date,
  createdAt: { type: Date, default: Date.now() },
  deletedAt: Date,
  color: String
})

const Car = mongoose.model<ICar>("Car", CarSchema)
export default Car

export const CarParameters: IParameter[] = [
  {
      name: 'id',
      short: 'i',
      type: String,
      field: "_id"
  },
  {
      name: 'brand',
      short: 'b',
      type: String,
      field: "brand"
  },
  {
      name: 'model',
      short: 'm',
      type: String,
      field: "model"
  },
  {
      name: 'price',
      short: 'p',
      type: Number,
      field: "price"
  },
  {
      name: 'date',
      short: 'd',
      type: String,
      field: "productionDate"
  },
  {
      name: 'color',
      short: 'c',
      type: String,
      field: "color"
  },
]