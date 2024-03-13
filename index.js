const express = require("express");
const user = require("./route/user");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

app.use(express.json())


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use("/api/user", user);
app.listen(8000, function () {
  console.log("Server running at port 8000...");
});
