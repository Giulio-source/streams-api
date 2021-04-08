const express = require("express");
const app = express();
const { nanoid } = require("nanoid");

app.use(express.json());

let streams = [];

app.get("/", (req, res) => {
  res.json(streams);
  console.log("GET", streams);
});

app.post("/", (req, res) => {
  const newStream = Object.assign({ id: nanoid() }, req.body);
  streams.push(newStream);
  res.json(newStream);
  console.log("POST", streams);
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
