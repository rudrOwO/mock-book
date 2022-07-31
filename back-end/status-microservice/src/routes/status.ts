import { Router, Response } from "express";
import { SecureRequest } from "../middleware/auth";
import { Status } from "../models/Status";
import { removeOldest } from "../utils/removeOldest";

export const status = Router();

status.post("/", async (req: SecureRequest, res: Response) => {
  try {
    await Status.create({
      userName: req.userName,
      content: req.body.content,
    });

    const docSize = await Status.estimatedDocumentCount();
    if (docSize > 10) await removeOldest(Status);

    res.status(200).send();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      errorMessage: "Internal Server Error",
    });
  }
});

status.get("/", async (req: SecureRequest, res: Response) => {
  try {
    const allStatus = await Status.find({}).sort({ createdAt: "descending" });
    res.status(200).json(allStatus);
  } catch (error) {
    res.status(500).json({
      errorMessage: "Internal Server Error",
    });
  }
});
