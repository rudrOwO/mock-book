import { Story } from "../models/Story";
import { minioClient } from "../server";

export const removeOldest = async (model: any) => {
  const query = await model.find({}).sort({ createdAt: "ascending" });
  await model.deleteOne({ createdAt: query[0].createdAt });

  // console.log(model === Story);
};
