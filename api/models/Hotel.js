import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  type: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  distances: { type: String, required: true },
  photos: { type: [String] },
  desc: { type: String, required: true },
  rating: { type: String, min: 0, max: 5 },
  rooms: { type: [String] },
  cheapestPrice: { type: Number, required: true },
  featured: { type: Boolean },
});

export default mongoose.model("Hotels", HotelSchema);
