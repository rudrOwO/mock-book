import { Request, Response } from "express";
import { Jwt } from "jsonwebtoken";

export interface SecureRequest extends Request {
  userEmail?: string;
}

export const authorize = (req: SecureRequest, res: Response, next: () => void) => {
  if (req.cookies.mockBookJWT) {
    // verify JWT integrity here
    next();
  } else {
    res.status(401).send("<h1>401: Access Denied</h1>");
  }
};
