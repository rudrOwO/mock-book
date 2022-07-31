import { Request, Response } from "express";
import { User } from "../models/User";
import jwt from "jsonwebtoken";

export const authorize = async (req: Request, res: Response, next: () => void) => {
  try {
    if (req.cookies.mockBookJWT) {
      const userEmail = jwt.verify(
        req.cookies.mockBookJWT,
        process.env.JWT_HASH_KEY
      ) as string;

      const userDoc = await User.findOne({ email: userEmail });
      const userName = `${userDoc.firstname} ${userDoc.lastname}`;

      res.status(200).json({
        isAuthenticated: true,
        userName,
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
  }
};
