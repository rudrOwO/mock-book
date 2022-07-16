import { Status } from "../models/Status";

export const removeOldest = async <T extends typeof Status>(model: T) => {
  const query = await model.find({}).sort({ createdAt: "ascending" });
  const result = await model.deleteOne({
    createdAt: query[0].createdAt,
  });
  console.log(result);
};
