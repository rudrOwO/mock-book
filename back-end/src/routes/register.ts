import { Router, Response, Request } from "express";
import { User } from "../models/User";
import jwt from "jsonwebtoken";

export const register = Router();

register.post("/", async (req: Request, res: Response) => {
  try {
    if (await User.exists({ email: req.body.email })) {
      throw "duplicateEmail";
    }

    await User.create(req.body);
    createJWT(req, res);

    res.status(200).json({
      isAuthenticated: true,
    });
  } catch (error) {
    if (error === "duplicateEmail") {
      res.status(200).json({
        errorMessage: "An account with the provided email already exists",
      });
    } else {
      res.status(500).json({
        errorMessage: "Internal Server Error",
      });
    }
  }
});

function createJWT(req: Request, res: Response) {
  const mockBookJWT = jwt.sign(req.body.email, process.env.JWT_HASH_KEY);

  res.cookie("mockBookJWT", mockBookJWT, {
    maxAge: 3600000 * 24 * 7, // Expires after 7 days
    httpOnly: true, // XSS Protection
    secure: true, // MITM Protection
    sameSite: "strict", // CSRF Protection
  });
}
