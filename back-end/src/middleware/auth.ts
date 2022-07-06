import { Request } from "express";

interface SecureRequest extends Request {
  user?: any;
}

// const authenticate = (req: Request, res: Response, next: () => void) => {
//   res.cookie("testCookie", "nachos", {
//     maxAge: 3600000 * 24 * 5,
//     httpOnly: true,
//   });
//   req.user = {
//     username: "Mandy",
//   };
//   next();
// };

export { SecureRequest };
