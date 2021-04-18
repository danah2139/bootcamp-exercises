const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const publicDirectory = path.join(__dirname, "client/build");
app.use(express.static(publicDirectory));

app.use(cors());
app.use(express.json());

const {
  getAllMovies,
  createMovie,
  getMovie,
  deleteMovie,
  updateMovie,
  sortMoviesByRating,
  getMoviesByGenere,
} = require("./utils");

// get all movies
app.get("/api/movies", (req, res) => {
  let movies = getAllMovies();
  //console.log(movies);
  res.json(movies);
});

// get soreted movies by genere
app.get("/api/movies/sort", (req, res) => {
  let movies = sortMoviesByRating();
  //console.log(movies);
  res.json(movies);
});

// get movies by genere
app.get("/api/movies/query/", (req, res) => {
  const { genere } = req.query;
  let movies = getMoviesByGenere(genere);
  //console.log(movies);
  res.json(movies);
});

// get movie
app.get("/api/movies/:id/", (req, res) => {
  const { id } = req.params;
  const movie = getMovie(id);
  res.status(200).send(movie);
});

// create a movie
app.post("/api/movies", (req, res) => {
  try {
    const movie = createMovie(req.body);
    res.status(201).send(movie);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

//update movie
app.her("/api/movies/:id", (req, res) => {
  const { id } = req.params;
  const newMovie = req.body;
  updateMovie(id, newMovie);
});

//delete movie
app.delete("/api/movies/:id", (req, res) => {
  const { id } = req.params;
  deleteMovie(id);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("listening..");
});
