import { SecureRequest } from "../middleware/auth";
import { Router, Response } from "express";

export const status = Router();

status.post("/", async (req: SecureRequest, res: Response) => {});
