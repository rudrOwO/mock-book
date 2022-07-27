import { Router, Request, Response } from "express";
import { User } from "../models/User";
import { createJWT } from "../utils/jwt";

export const login = Router();

login.post("/", async (req: Request, res: Response) => {
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
