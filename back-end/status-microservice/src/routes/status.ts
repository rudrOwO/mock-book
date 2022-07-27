import { Router, Request, Response } from "express";
import fetch from "cross-fetch";
import { Status } from "../models/Status";
import { User } from "../models/User";
import { removeOldest } from "../utils/removeOldest";

export const status = Router();

status.post("/", async (req: Request, res: Response) => {
  try {
    const response = await fetch(process.env.AUTH_SERVICE, {
      method: "GET",
      headers: {
        Cookie: req.cookies,
      },
    });

    const { userEmail } = await response.json();
    console.log("User Email : ", userEmail);

    const user = await User.findOne({ email: userEmail });
    await Status.create({
      userName: `${user.firstname} ${user.lastname}`,
      content: req.body.content,
    });

    const docSize = await Status.estimatedDocumentCount();
    if (docSize > 10) await removeOldest(Status);

    res.status(200).send();
  } catch (error) {
    console.log(req.body);
    res.status(500).json({
      errorMessage: "Internal Server Error",
    });
  }
});

status.get("/", async (req: Request, res: Response) => {
  try {
    const allStatus = await Status.find({}).sort({ createdAt: "descending" });
    res.status(200).json(allStatus);
  } catch (error) {
    res.status(500).json({
      errorMessage: "Internal Server Error",
    });
  }
});
