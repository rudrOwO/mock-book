import { SecureRequest } from "../middleware/auth";
import { Router, Response } from "express";
import { Status } from "../models/Status";
import { User } from "../models/User";
import { removeOldest } from "../utils/removeOldest";

export const status = Router();

status.post("/", async (req: SecureRequest, res: Response) => {
  try {
    const user = await User.findOne({ email: req.userEmail });
    await Status.create({
      userName: `${user.firstname} ${user.lastname}`,
      content: req.body.content,
    });

    const docSize = await Status.estimatedDocumentCount();
    if (docSize > 10) removeOldest(Status);

    res.status(200).send();
  } catch (error) {
    console.log(req.body);
    res.status(500).json({
      errorMessage: "Internal Server Error",
    });
  }
});

status.get("/", async (req: SecureRequest, res: Response) => {
  try {
    const allStatus = await Status.find({});
    res.status(200).json(allStatus);
  } catch (error) {
    res.status(500).json({
      errorMessage: "Internal Server Error",
    });
  }
});
