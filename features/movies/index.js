const router = require('express').Router();

const movies = require('./movies');
const userMovies = require('./user-movies');

router
  .route('/')
    .post(movies);

router
  .route('/userMovies')
    .post(userMovies);

module.exports = router;
