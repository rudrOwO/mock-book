import { Schema, model } from "mongoose";
import timeStamps from "mongoose-timestamp";

export interface StoryInterface {
  createdAt: Date;
  updatedAt: Date;
}

const storySchema = new Schema<StoryInterface>({});

storySchema.plugin(timeStamps);
export const Story = model("Story", storySchema);
