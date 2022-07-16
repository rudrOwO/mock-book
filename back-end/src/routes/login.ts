import { Router, Response } from "express";
import { SecureRequest, authorize } from "../middleware/auth";
import { User } from "../models/User";
import { createJWT } from "../middleware/jwt";

export const login = Router();

login.post("/", async (req: SecureRequest, res: Response) => {
  try {
    if (await User.exists({ email: req.body.email, password: req.body.password })) {
      if (!req.cookies.mockBookJWT) {
        createJWT(req, res);
      }
      res.status(200).json({
        isAuthenticated: true,
      });
    } else {
      res.status(401).json({
        errorMessage: "Invalid email / pasword",
      });
    }
  } catch (error) {
    res.status(500).json({
      errorMessage: "Internal Server Error",
    });
  }
});
