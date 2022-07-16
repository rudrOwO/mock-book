import { Response, Request } from "express";
import jwt from "jsonwebtoken";

export function createJWT(req: Request, res: Response) {
  const mockBookJWT = jwt.sign(req.body.email, process.env.JWT_HASH_KEY);

  res.cookie("mockBookJWT", mockBookJWT, {
    maxAge: 3600000 * 24 * 7, // Expires after 7 days
    httpOnly: true, // XSS Protection
    secure: true, // MITM Protection
    sameSite: "none", // CSRF Protection
  });
}
