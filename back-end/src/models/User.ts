import { Schema, model } from "mongoose";

interface UserInterface {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const userSchema = new Schema<UserInterface>({
  firstname: {
    type: String,
    required: true,
  },
  lastname: String,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const User = model("User", userSchema);
