import { Router, Request, Response } from "express";
export const register = Router();

register.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.status(200).json({
    isAuthenticated: true,
  });
});
