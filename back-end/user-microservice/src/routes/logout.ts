import { Router, Request, Response } from "express";

export const logout = Router();

logout.get("/", (req: Request, res: Response) => {
  res.clearCookie("mockBookJWT");
  res.status(200).send("Token Removed");
});
