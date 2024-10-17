const express = require("express");
const movies = require("./movies.json");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.get("/movies/list", (req, res) => {
  setTimeout(() => {
    return res.send(movies);
  }, 3000);
});

app.get("/movie/:id", (req, res) => {
  const id = req.params.id;
  const movie = movies.find((m) => m.id === id);

  return res.send(movie);
});

app.listen(8080, () => {
  console.log("Now listening on PORT 8080");
});
