import "dotenv/config";
import express from "express";
import cors from "cors";
import { register } from "./routes/register";
import mongoose from "mongoose";

const app = express();

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// Routers
app.use("/register", register);

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(_ => {
    app.listen(process.env.PORT, () =>
      console.log("\x1b[36m%s\x1b[0m", `Server is Running on port ${process.env.PORT}`)
    );
  })
  .catch(err => console.log(err));
