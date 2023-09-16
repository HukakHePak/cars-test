import mongoose from "mongoose"

export interface ICar extends mongoose.Document {
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

export const parameters = [
  {
      name: 'brand',
      short: 'b',
      type: String,
      field: "brand"
  }
]