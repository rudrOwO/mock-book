import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const authorize = (req: Request, res: Response, next: () => void) => {
  try {
    if (req.cookies.mockBookJWT) {
      const userEmail = jwt.verify(
        req.cookies.mockBookJWT,
        process.env.JWT_HASH_KEY
      ) as string;

      res.status(200).json({
        isAuthenticated: true,
        userEmail,
      });
    } else {
      res.status(401).json({
        isAuthenticated: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      errorMessage: "Internal Server Error",
    });
    console.log(error);
  }
};
