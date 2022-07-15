import { Router, Response } from "express";
import { SecureRequest } from "../middleware/auth";
export const register = Router();
import { User } from "../models/User";

register.post("/", async (req: SecureRequest, res: Response) => {
  try {
    if (await User.exists({ email: req.body.email })) {
      throw "Duplicate Email";
    }

    await User.create(req.body);

    res.status(200).json({
      isAuthenticated: true,
    });
  } catch (error) {
    if (error === "Duplicate Email") {
      res.status(400).json({
        duplicateEmail: true,
      });
    }
  }
});
