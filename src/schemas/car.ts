import mongoose from "mongoose"

export interface ICar extends mongoose.Document {
  brand: String
  model: String
  price: Number
  productionDate: Date
}

export const CarSchema = new mongoose.Schema({
  brand: String,
  model: String,
  price: Number,
  productionDate: Date
})

const Car = mongoose.model<ICar>("Car", CarSchema)
export default Car
