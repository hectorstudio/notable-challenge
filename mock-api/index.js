const express = require("express");
const apiMocker = require("connect-api-mocker");
const cors = require("cors");
const fs = require("fs");

const port = 9000;
const app = express();

var corsOptions = {
  origin: "http://example.com",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use("/api", apiMocker("mock-api"));

app.use(cors());

const readDBFile = (file) => {
  // TODO: this should be replaced with database action on production
  const fileStr = fs.readFileSync(file);
  return JSON.parse(fileStr);
};

app.get("/physicians", (req, res) => {
  const physicians = readDBFile("./physicians.json");
  res.jsonp(physicians);
});

app.get("/appointments/:id", (req, res) => {
  const { id } = req.params;
  const appointments = readDBFile("./appointments.json");
  res.jsonp(appointments.filter((el) => el.physicianId == id));
});

console.log(`Mock API Server is up and running at: http://localhost:${port}`);
app.listen(port);
