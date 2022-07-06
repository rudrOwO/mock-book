import { Router, Response } from "express";
import { SecureRequest } from "../middleware/auth";
export const register = Router();

register.post("/", (req: SecureRequest, res: Response) => {
  res.status(200).json({
    isAuthenticated: true,
    user: req.user,
  });
});
