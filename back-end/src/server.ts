import express, { Request, Response } from "express";
import cors from "cors";
import { UserRequest } from "./middleware/auth";
const MongoClient = require("mongodb").MongoClient;

const app = express();
const PORT = 5000;

// Global Middleware
app.use(cors({ origin: "*" }));

app.get("/", async (req: UserRequest, res: Response) => {
  try {
    req.user = "Anya";
    res.send("Aloha");
  } catch {
    res.status(500);
  }
});

app.listen(PORT, () => console.log("\x1b[36m%s\x1b[0m", `Server Running on port ${PORT}`));

// Connect to MongoDB
// const mongurl = "mongodb://127.0.0.1:27017/game-of-thrones";
// const dbName = "game-of-thrones";
// let db;

// MongoClient.connect(mongurl, { useNewUrlParser: true }, (err, client) => {
//   if (err) return console.log(err);

//   // Storing a reference to the database so you can use it later
//   db = client.db(dbName);
//   console.log(`Connected MongoDB: ${mongurl}`);
//   console.log(`Database: ${dbName}`);

//   const characters = db.collection("characters");
// });
