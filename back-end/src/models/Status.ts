import { Schema, model } from "mongoose";
import timeStamps from "mongoose-timestamp";

export interface StatusInterface {
  userName: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
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

statusSchema.plugin(timeStamps);
export const Status = model("Status", statusSchema);
