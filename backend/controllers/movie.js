import db from '../db.js'

const validateMovie = (movie) => {
  if (!movie.name || !movie.director || !movie.duration || !movie.rating || !movie.genre) {
    return "All fields are required.";
  }
  if (movie.rating < 0 || movie.rating > 10) {
    return "Rating must be between 0 and 10.";
  }
  if (movie.duration <= 0) {
    return "Duration must be greater than 0.";
  }
  return null;
};

export const getMovies = (_, res) => {
  const query = 'SELECT * FROM movies';

  db.query(query, (err, data) => {
    if (err) {
      return res.status(500).json({ error: "An error occurred while fetching movies." });
    }
    return res.status(200).json(data);
  });
};

export const createMovie = (req, res) => {
  const validationError = validateMovie(req.body);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const query = 'INSERT INTO movies(`name`, `director`, `duration`, `rating`, `genre`) VALUES (?, ?, ?, ?, ?)';
  const values = [req.body.name, req.body.director, req.body.duration, req.body.rating, req.body.genre];

  db.query(query, values, (err, data) => {
    if (err) {
      return res.status(500).json({ error: "An error occurred while adding the movie." });
    }
    return res.status(201).json({ message: "Movie added successfully!", movieId: data.insertId });
  });
};

export const editMovie = (req, res) => {
  const movieId = req.params.id;
  const validationError = validateMovie(req.body);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const query = 'UPDATE movies SET `name` = ?, `director` = ?, `duration` = ?, `rating` = ?, `genre` = ? WHERE id = ?';
  const values = [req.body.name, req.body.director, req.body.duration, req.body.rating, req.body.genre];

  db.query(query, [...values, movieId], (err, data) => {
    if (err) {
      return res.status(500).json({ error: "An error occurred while updating the movie." });
    }
    if (data.affectedRows === 0) {
      return res.status(404).json({ error: "Movie not found." });
    }
    return res.status(200).json({ message: "Movie updated successfully!" });
  });
};

export const deleteMovie = (req, res) => {
  const movieId = req.params.id;

  const query = 'DELETE FROM movies WHERE id = ?';

  db.query(query, movieId, (err, data) => {
    if (err) {
      return res.status(500).json({ error: "An error occurred while deleting the movie." });
    }
    if (data.affectedRows === 0) {
      return res.status(404).json({ error: "Movie not found." });
    }
    return res.status(200).json({ message: "Movie deleted successfully!" });
  });
};

