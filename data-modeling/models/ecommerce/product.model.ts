import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    images: [{ type: String }],
    price: {
      mrp: {
        type: Number,
        required: [true, "mrp is required"],
      },
      currentPrice: {
        type: Number,
        required: [true, "currentPrice is required"],
      },
    },
    stock: {
      type: Number,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller",
    },
  },
  { timestamps: true },
);

export const Product = mongoose.model("Product", productSchema);
