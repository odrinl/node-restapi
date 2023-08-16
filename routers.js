const express = require('express');
const router = express.Router();

let movies = [
  {
    id: '1',
    title: 'Inception',
    director: 'Christopher Nolan',
    release_date: '2010-07-16',
  },
  {
    id: '2',
    title: 'The Irishman',
    director: 'Martin Scorsese',
    release_date: '2019-09-27',
  },
];

router.get('/movie', (req, res) => {
  res.json(movies);
});

router.post('/movie', (req, res) => {
  const movie = req.body;

  console.log(movie);
  movies.push(movie);
  res.send(`Movie is added to the list!`);
});

router.get('/movie/:id', (req, res) => {
  const id = req.params.id;

  for (let movie of movies) {
    if (movie.id === id) {
      return res.json(movie);
    }
  }
  res.status(404).send('Movie not found!');
});

router.delete('/movie/:id', (req, res) => {
  const id = req.params.id;

  movies = movies.filter((movie) => movie.id !== id);

  res.send(`Movie is deleted!`);
});

module.exports = router;
