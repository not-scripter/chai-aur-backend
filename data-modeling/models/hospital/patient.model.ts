import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    diagnosedWith: {
      type: String,
      required: [true, "diagnosedWith is required"],
    },
    age: {
      type: String,
      required: [true, "age is required"],
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Others"],
      required: [true, "gender is required"],
    },
    bloodGroup: {
      type: String,
      enum: ["A", "B", "Others"],
      required: [true, "blood group is required"],
    },
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },
    admittedIn: {
      type: Date,
      required: [true, "date is required"],
    },
  },
  { timestamps: true },
);

export const Patient = mongoose.model("Patient", patientSchema);
