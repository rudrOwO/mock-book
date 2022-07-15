import { Router, Response } from "express";
import { SecureRequest, authorize } from "../middleware/auth";
import { User } from "../models/User";

export const login = Router();

login.post("/", (req: SecureRequest, res: Response) => {
  res.status(200).json({
    isAuthenticated: true,
  });
});
