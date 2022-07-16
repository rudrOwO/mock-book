import { Schema, model } from "mongoose";
import timeStamps from "mongoose-timestamp";

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

statusSchema.plugin(timeStamps);
export const Status = model("Status", statusSchema);
