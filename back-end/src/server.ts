import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import { register } from "./routes/register";
import { login } from "./routes/login";

const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());
app.use(express.json());

// Routers
app.use("/register", register);
app.use("/login", login);

app.post("/", (req: Request, res: Response) => {
  if (req.cookies.mockBookJWT) {
    console.log(req.cookies);
    res.status(200).json({
      isAuthenticated: true,
    });
  } else {
    res.status(500).json({
      errorMessage: "Something went wrong",
    });
  }
});

// Initialize MongoDB and Server
mongoose
  .connect(process.env.MONGODB_URL)
  .then(_ => {
    app.listen(process.env.PORT, () =>
      console.log("\x1b[36m%s\x1b[0m", `Server is Running on port ${process.env.PORT}`)
    );
  })
  .catch(err => console.log(err));
