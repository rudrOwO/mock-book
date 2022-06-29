const express = require("express");
const cors = require("cors");
const http = require("http");
const { readFile } = require("fs").promises;
const MongoClient = require("mongodb").MongoClient;

const app = express();
const PORT = 5000;
const mongurl = "mongodb://127.0.0.1:27017/game-of-thrones";

app.use(cors({ origin: "*" }));

// Express Code
app.get("/", async (req, res) => {
  try {
    res.send("Hola");
  } catch {
    res.status(500);
  }
});

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));

const dbName = "game-of-thrones";
let db;

// MongoDB
MongoClient.connect(mongurl, { useNewUrlParser: true }, (err, client) => {
  if (err) return console.log(err);

  // Storing a reference to the database so you can use it later
  db = client.db(dbName);
  console.log(`Connected MongoDB: ${mongurl}`);
  console.log(`Database: ${dbName}`);

  const characters = db.collection("characters");
  characters.insertOne({ name: "Anya Forger" });
});
