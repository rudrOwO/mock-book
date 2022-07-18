import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import * as Minio from "minio";
import { register } from "./routes/register";
import { login } from "./routes/login";
import { status } from "./routes/status";
import { authorize } from "./middleware/auth";
import { home } from "./routes/home";
import { logout } from "./routes/logout";

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

// Extra
app.use("/", authorize, home);
app.use("/logout", logout);

// Connect to MongoDB and then spin up Server
mongoose
  .connect(process.env.MONGODB_URL)
  .then(_ => {
    app.listen(process.env.PORT, () =>
      console.log("\x1b[36m%s\x1b[0m", `Server is Running on port ${process.env.PORT}`)
    );
  })
  .catch(err => console.log(err));

// Initialize Minio
export const minioClient = new Minio.Client({
  accessKey: process.env.MINIO_ACCESS_KEY,
  secretKey: process.env.MINIO_SECRET_KEY,
  endPoint: process.env.HOST,
  port: Number(process.env.MINIO_PORT),
  useSSL: false,
});

minioClient.makeBucket("status", "", err => {
  if (err) console.error("Errror while creatting bucket", err);
  console.log("Status bucket created");
});

minioClient.fPutObject(
  "status",
  "test",
  "../front-end/assets/favicon.svg",
  {
    "Content-Type": "image/svg+xml",
  },
  (err, etag) => {
    if (err) console.error(err);
    console.log("Etag", etag);
  }
);

//
