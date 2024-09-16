import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    qualification: {
      type: String,
      required: [true, "qualification is required"],
    },
    experienceInYear: {
      type: Number,
      default: 0,
    },
    salary: {
      type: String,
    },
    worksInHospitals: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Hospital" },
    ],
  },
  { timestamps: true },
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
