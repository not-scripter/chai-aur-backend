import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({});

const orderSchema = new mongoose.Schema(
  {
    quantity: [orderItemSchema],
  },
  { timestamps: true },
);

export const Order = mongoose.model("Order", orderSchema);
