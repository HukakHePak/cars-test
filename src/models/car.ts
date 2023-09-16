import mongoose from "mongoose"
import IParameter from "../../client/interfaces/IParameter"

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

export const CarParameters: IParameter[] = [
  {
    name: "id",
    short: "i",
    type: String,
    field: "_id",
    description: "Id, required for update/delete programs"
  },
  {
    name: "brand",
    short: "b",
    type: String,
    field: "brand",
    description: "Car brand, support multi words. example: -brand Aston Martin"
  },
  {
    name: "model",
    short: "m",
    type: String,
    field: "model"
  },
  {
    name: "price",
    short: "p",
    type: Number,
    field: "price",
    description: "Car price, don't write minus pls"
  },
  {
    name: "date",
    short: "d",
    type: String,
    field: "productionDate",
    description: "Car's production date. Format: DD.MM.YYYY. example: -date 01.01.1970"
  },
  {
    name: "color",
    short: "c",
    type: String,
    field: "color",
    description: "Simple string, name of car color. Not hex (use color codes instead)"
  }
]
