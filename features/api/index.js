const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();

const login = require('../../routes/login');
const createUser = require('../../routes/create-user');
const movies = require('../../routes/movies');
const userMovies = require('../../routes/user-movies');

router
  .use(bodyParser.json())
  .use('/login', login)
  .use('/createUser', createUser)
  .use('/userMovies', userMovies)
  .use('/movies', movies)

module.exports = router;
