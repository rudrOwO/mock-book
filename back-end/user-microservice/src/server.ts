import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import { register } from "./routes/register";
import { login } from "./routes/login";
import { authorize } from "./services/authService";
import { logout } from "./routes/logout";

const app = express();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5002",
      "http://localhost:4173",
      "http://10.100.104.35:4173",
      "http://192.168.0.107:4173",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

// Routers
app.use("/register", register);
app.use("/login", login);
app.use("/logout", logout);
app.use("/", authorize);

// Connect to MongoDB and then spin up Server
mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(_ => {
    app.listen(process.env.PORT, () =>
      console.log("\x1b[36m%s\x1b[0m", `Server is Running on port ${process.env.PORT}`)
    );
  })
  .catch(err => console.log(err));
