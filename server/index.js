const express = require("express");
const cors = require("cors");
const app = express();
const { prisma } = require("./db");

app.use(cors());

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.use("", require("./routes/movies"));
app.use("", require("./routes/auth"));

app.listen(8080, () => {
  console.log("Now listening on PORT 8080");
});
