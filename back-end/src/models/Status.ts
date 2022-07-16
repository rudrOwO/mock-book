import { Schema, model } from "mongoose";

interface StatusInterface {
  userName: string;
  content: string;
}

const statusSchema = new Schema<StatusInterface>({
  userName: {
    type: String,
    required: true,
  },

  content: {
    type: String,
    required: true,
  },
});

export const Status = model("Status", statusSchema);
