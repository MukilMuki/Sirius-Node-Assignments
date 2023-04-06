let express = require("express");
let app = express();
let port = 4000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let buddyRoute = require("./routes/buddy.route.js");
app.use("/user", buddyRoute);

app.get("/", (req, res) => {
  res.send(
    "A friendly buddy program for everyone to add themselves as a buddy!"
  );
});

app.listen(port, () => {
  console.log("The server has started");
});
