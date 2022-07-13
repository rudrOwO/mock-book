import { Router, Response } from "express";
import { SecureRequest } from "../middleware/auth";
export const register = Router();

register.post("/", (req: SecureRequest, res: Response) => {
  console.log(req.body);

  res.status(200).json({
    isAuthenticated: true,
  });
});
