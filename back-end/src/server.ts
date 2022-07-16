import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import { register } from "./routes/register";
import { login } from "./routes/login";
import { status } from "./routes/status";
import { authorize } from "./middleware/auth";

const app = express();

// Middleware
app.use(
  cors({ origin: ["http://localhost:3000", "http://localhost:4173"], credentials: true })
);
app.use(cookieParser());
app.use(express.json());

// Routers
app.use("/register", register);
app.use("/login", login);
app.use("/status", authorize, status);

// Default Home Page route
app.get("/", authorize, (req: Request, res: Response) => {
  res.status(200).json({
    isAuthenticated: true,
  });
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
