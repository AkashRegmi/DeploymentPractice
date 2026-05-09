const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT;

//this is tyhe middlewaere
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Docker Hub");
});

app.listen(port, () => {
  console.log(`App is Listerning to port ${port}`);
});
