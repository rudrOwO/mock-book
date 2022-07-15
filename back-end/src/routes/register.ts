import { Router, Response, Request } from "express";
export const register = Router();
import { User } from "../models/User";
import { createJWT } from "../middleware/jwt";

register.post("/", async (req: Request, res: Response) => {
  try {
    if (await User.exists({ email: req.body.email })) {
      throw "duplicateEmail";
    }

    await User.create(req.body);
    createJWT(req, res);

    res.status(200).json({
      isAuthenticated: true,
    });
  } catch (error) {
    if (error === "duplicateEmail") {
      res.status(200).json({
        errorMessage: "An account with the provided email already exists",
      });
    } else {
      res.status(500).json({
        errorMessage: "Internal Server Error",
      });
    }
  }
});
