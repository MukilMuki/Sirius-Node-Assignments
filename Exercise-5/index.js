let express = require("express");
let app = express();
require("dotenv").config();

const port = process.env.PORT;
const indexInformation =
  "A friendly buddy program for everyone to add themselves as a buddy!";

let buddyRoute = require("./routes/buddy.route.js");
app.use("/user", buddyRoute);

app.get("/", (req, res) => {
  res.send(indexInformation);
});

app.listen(port, () => {
  console.log("The server has started");
});
