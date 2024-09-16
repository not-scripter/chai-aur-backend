import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    line1: {
      type: String,
      required: [true, "Address is required"],
    },
    line2: {
      type: String,
    },
    city: {
      type: String,
      required: [true, "City is required"],
    },
    pincode: {
      type: String,
      required: [true, "Pincode is required"],
    },
    state: {
      type: String,
      required: [true, "State is required"],
    },
    country: {
      type: String,
      required: [true, "Country is required"],
    },
  },
  { timestamps: true },
);

export const Address = mongoose.model("Address", addressSchema);
