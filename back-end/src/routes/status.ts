import { SecureRequest } from "../middleware/auth";
import { Router, Response } from "express";
import { Status } from "../models/Status";
import { User } from "../models/User";

export const status = Router();

status.post("/", async (req: SecureRequest, res: Response) => {
  try {
    const user = await User.findOne({ email: req.userEmail });
    await Status.create({
      userName: `${user.firstname} ${user.lastname}`,
      content: req.body.content,
    });
    res.status(200);
  } catch (error) {
    res.status(500).json({
      errorMessage: "Internal Server Error",
    });
  }
});
