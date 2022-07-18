import { SecureRequest } from "../middleware/auth";
import { Router, Response } from "express";
import { removeOldest } from "../utils/removeOldest";
import { Story } from "../models/Story";
import { minioClient } from "../server";
import multer from "multer";

export const story = Router();
const multerUpload = multer();

story.post(
  "/",
  multerUpload.single("story"),
  async (req: SecureRequest, res: Response) => {
    try {
      const createdDoc = await Story.create({});
      // console.log(String(createdDoc._id));

      const docSize = await Story.estimatedDocumentCount();
      // if (docSize > 10)
      await removeOldest(Story);

      res.status(200).send();
    } catch (error) {
      console.log(req.body);
      res.status(500).json({
        errorMessage: "Internal Server Error",
      });
    }
  }
);
