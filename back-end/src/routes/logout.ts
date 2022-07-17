import { Router, Request, Response } from "express";
import { removeJWT } from "../utils/jwt";

export const logout = Router();

logout.get("/", (req: Request, res: Response) => {
  removeJWT(res);
  res.status(200).send("Token Removed");
});
