import { Router, Request, Response } from "express";
import fetch from "node-fetch";

export const authorize = Router();

export interface SecureRequest extends Request {
  userEmail?: string;
}

authorize.post("/", async (req: SecureRequest, res: Response, next: () => void) => {
  try {
    const response = await fetch(process.env.AUTH_SERVICE, {
      method: "GET",
      headers: {
        Cookie: `mockBookJWT=${req.cookies.mockBookJWT}`,
      },
    });

    const { userEmail } = await response.json();
    req.userEmail = userEmail;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      errorMessage: "Internal Server Error",
    });
  }
});
