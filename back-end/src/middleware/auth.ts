import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export interface SecureRequest extends Request {
  userEmail?: string;
}

export const authorize = (req: SecureRequest, res: Response, next: () => void) => {
  try {
    if (req.cookies.mockBookJWT) {
      req.userEmail = jwt.verify(
        req.cookies.mockBookJWT,
        process.env.JWT_HASH_KEY
      ) as string;
      next();
    } else {
      res.status(401).json({
        isAuthenticated: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      errorMessage: "Internal Server Error",
    });
  }
};
