import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      mrp: {
        type: Number,
        required: true,
      },
      currentPrice: {
        type: Number,
        required: true,
      },
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller",
    },
  },
  { timestamps: true },
);

export const Product = mongoose.model("Product", productSchema);
