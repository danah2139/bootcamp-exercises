const fs = require("fs");

const loadMovies = () => {
  try {
    const dataBuffer = fs.readFileSync("movies.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveMovies = (movies) => {
  const dadaJSON = JSON.stringify(movies);
  fs.writeFileSync("movies.json", dadaJSON);
};

const getAllMovies = () => {
  return loadMovies();
};

const getMoviesByGenere = (genere) => {
  const movies = loadMovies();
  return movies.filter((movie) => {
    return movie.genere.toLowerCase() === genere.toLowerCase();
  });
};

const createMovie = (movie) => {
  if (!movie) {
    throw new Error("cannot create user");
  }
  let movies = loadMovies();
  movies.push(movie);
  saveMovies(movies);
};

const getMovie = (id) => {
  let movies = loadMovies();
  return movies.find((user) => user.id === id);
};

const deleteMovie = (id) => {
  const movies = loadMovies();
  let filterMovies = movies.filter((movie) => movie.id !== id);
  saveMovies(filterMovies);
};

const updateMovie = (id, updatedMovie) => {
  const movies = loadMovies();
  const updateMovies = movies.map((movie) => {
    if (movie.id === id) return { ...movie, ...updatedMovie };
    else {
      return movie;
    }
  });

  saveMovies(updateMovies);
};

const sortMoviesByRating = () => {
  const movies = loadMovies();
  const sortMovies = movies.sort((a, b) => {
    return a.rating - b.rating;
  });
  saveMovies(sortMovies);
};

module.exports = {
  getAllMovies,
  createMovie,
  getMovie,
  deleteMovie,
  updateMovie,
  sortMoviesByRating,
  getMoviesByGenere,
};
