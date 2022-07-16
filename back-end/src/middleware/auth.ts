import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export interface SecureRequest extends Request {
  userID?: string;
}

export const authorize = (req: SecureRequest, res: Response, next: () => void) => {
  try {
    if (req.cookies.mockBookJWT) {
      const userEmail = jwt.verify(req.cookies.mockBookJWT, process.env.JWT_HASH_KEY);
      console.log(userEmail);
      // req.userEmail = userEmail;
    } else {
      throw "401";
    }
  } catch (error) {
    if (error === "401") {
      res.status(401).send("<h1>Access Denied</h1>");
    } else {
      res.status(500).send("<h1>Internal Server Error</h1>");
    }
  }
};
