import { Request, Response } from "express";

interface SecureRequest extends Request {
  user?: any;
}

const authenticate = (req: SecureRequest, res: Response, next: () => void) => {
  req.user = {
    username: "Mandy",
  };
  next();
};

export { SecureRequest };
