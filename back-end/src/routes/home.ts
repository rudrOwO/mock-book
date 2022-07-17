import { Router, Response } from "express";
import { SecureRequest } from "../middleware/auth";

export const home = Router();

home.get("", (req: SecureRequest, res: Response) => {
  res.status(200).json({
    isAuthenticated: true,
  });
});
