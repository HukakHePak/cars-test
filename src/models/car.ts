import mongoose from "mongoose"

export interface ICar extends mongoose.Document {
  name: string
  somethingElse?: number
}
export const CarSchema = new mongoose.Schema({
  name: { type: String, required: true },
  somethingElse: Number
})
const Car = mongoose.model<ICar>("Car", CarSchema)
export default Car
