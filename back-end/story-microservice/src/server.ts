import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import * as Minio from "minio";
import { story } from "./routes/story";
import { authorize } from "./middleware/auth";

const app = express();

// Middleware
app.use(
  cors({
    origin: [
      "http://nginx:80",
      "http://localhost:3000",
      "http://localhost:4173",
      "http://localhost:5001",
      "http://10.100.104.35:4173",
      "http://192.168.0.107:4173",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

// Routers
app.use("/story", authorize, story);

// Connect to MongoDB and then spin up Server
mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
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

// Create bucket 'story' if it doesn't exist already
minioClient.bucketExists("story", function (err, exists) {
  if (err) {
    return console.log(err);
  }
  if (!exists) {
    minioClient.makeBucket("story", "us-east-1", function (err) {
      if (err) return console.log("Error creating bucket.", err);
      console.log('Story Bucket Created".');
    });
  }
});
