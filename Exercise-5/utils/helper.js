const fs = require("fs");

let cors = require("cors");
let express = require("express");
let app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:4000"],
  })
);

function readFromFile() {
  const file = fs.readFileSync("./cdw_ace23_buddies.json", "utf-8");
  return file;
}

function writeJSONData(JSONData) {
  fs.writeFileSync("./cdw_ace23_buddies.json", JSON.stringify(JSONData));
}

module.exports = { readFromFile, writeJSONData };
