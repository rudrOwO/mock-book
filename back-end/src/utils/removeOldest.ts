import { Status } from "../models/Status";
type T = typeof Status;

export const removeOldest = async (model: T) => {
  const query = await model.find({}).sort({ createdAt: "ascending" });
  const result = await model.deleteOne({
    createdAt: query[0].createdAt,
  });
};
