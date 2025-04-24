import db from '../db.js'

export const getMovies = (_, res) => {
  const query = 'SELECT * FROM ovies';

  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })
}

export const createMovie = (req, res) => {
  const query = 'INSERT INTO movies(`name`, `director`, `duration`, `rating`, `genre`) VALUES (?, ?, ?, ?, ?)';

  const values = [req.body.name, req.body.director, req.body.duration, req.body.rating, req.body.genre];

  db.query(query, values, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })
}

export const editMovie = (req, res) => {
  const query = 'UPDATE movies SET `name` = ?, `director` = ?, `duration` = ?, `rating` = ?, `genre` = ? WHERE id = ?';
  const values = [req.body.name, req.body.director, req.body.duration, req.body.rating, req.body.genre];
  const movieId = req.params.id;

  db.query(query, [...values, movieId], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })
}

export const deleteMovie = (req, res) => {
  const query = 'DELETE FROM movies WHERE id = ?';
  const movieId = req.params.id;

  db.query(query, movieId, (err, data) => {
    if(err) return res.json(err);
    return res.json(data);
  })
}
