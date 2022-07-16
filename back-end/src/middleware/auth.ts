import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export interface SecureRequest extends Request {
  userEmail?: string;
}

export const authorize = (req: SecureRequest, res: Response, next: () => void) => {
  try {
    if (req.cookies.mockBookJWT) {
      const userEmail = jwt.verify(req.cookies.mockBookJWT, process.env.JWT_HASH_KEY);
      req.userEmail = userEmail as string;
      res.status(200).json({
        isAuthenticated: true,
      });
      next();
    } else {
      res.status(200).json({
        isAuthenticated: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      errorMessage: "Internal Server Error",
    });
  }
};
