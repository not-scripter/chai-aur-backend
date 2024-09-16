import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderItems: [orderItemSchema],
    totalPrice: { type: Number, required: true },
    orderAddress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },
    shippingAddress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },
    status: {
      type: String,
      enum: ["PENDING", "SHIPPED", "DELIVERED"],
      default: "PENDING",
    },
    orderedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
    },
  },
  { timestamps: true },
);

export const Order = mongoose.model("Order", orderSchema);
