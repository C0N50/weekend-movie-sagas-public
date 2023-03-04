const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  res.sendStatus(500)
});

router.get('/:id', (req, res) => {

  console.log(req.params.id)

  const queryParams = [
    req.params.id // comes from url
  ];

  const queryText = `
  SELECT genres.id, genres.name FROM genres
  JOIN movies_genres ON genres.id = movies_genres.genre_id
  JOIN movies ON movies.id = movies_genres.movie_id
  WHERE movies.id = $1
  GROUP BY genres.id, genres.name;;
  `;

  pool.query(queryText, queryParams)
    .then(result => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

});


module.exports = router;