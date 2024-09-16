import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "uswrname is required"],
      unique: [true, "username should be unique"],
      lowercase: [true, "username should be in lowercase"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: [true, "email should be unique"],
      lowercase: [true, "email should be in lowercase"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
  },
  { timestamps: true },
);

export const User = mongoose.model("User", userSchema);

//NOTE: MongoDB will automatically convert "User" to "users" plural and lowercase if it is not already, it is their standard practice
