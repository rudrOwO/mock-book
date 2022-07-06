import express from "express";
import cors from "cors";
import { register } from "./routes/register";
const MongoClient = require("mongodb").MongoClient;

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// Routers
app.use("/register", register);

app.listen(PORT, () =>
  console.log("\x1b[36m%s\x1b[0m", `Server Running on port ${PORT}`)
);

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
