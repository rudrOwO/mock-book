import { SecureRequest } from "../middleware/auth";
import { Router, Response } from "express";
import { removeOldest } from "../utils/removeOldest";
import { Story } from "../models/Story";
import { minioClient } from "../server";
import multer from "multer";
import { arrayBuffer } from "stream/consumers";

export const story = Router();
const multerUpload = multer();

story.post(
  "/",
  multerUpload.single("story"),
  async (req: SecureRequest, res: Response) => {
    const createdDoc = await Story.create({});
    try {
      const imageName = String(createdDoc._id);

      await minioClient.putObject("story", imageName, req.file.buffer);

      const docSize = await Story.estimatedDocumentCount();
      if (docSize > 10) await removeOldest(Story);

      res.status(200).send();
    } catch (error) {
      await Story.deleteOne({ _id: createdDoc._id });

      res.status(500).json({
        errorMessage: "Internal Server Error",
      });
    }
  }
);

story.get("/", async (req: SecureRequest, res: Response) => {
  try {
    const storyDocs = await Story.find({}).sort({ createdAt: "descending" });
    const srcArray = storyDocs.map(doc => String(doc._id));

    res.status(200).json(srcArray);
  } catch (error) {
    res.status(500).json({
      errorMessage: "Internal Server Error",
    });
  }
});

story.get("/:src", async (req: SecureRequest, res: Response) => {
  const objName = req.params.src;

  try {
    // Possible Improvement here => Use chunks of stream
    const imgBlob = await minioClient.getObject("story", objName);
    const buffer = await arrayBuffer(imgBlob);
    const array = new Uint8Array(buffer);
    res.write(array);
    res.status(200).send();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      errorMessage: "Internal Server Error",
    });
  }
});
