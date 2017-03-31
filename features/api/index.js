const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();

const user = require('../users');
const movies = require('../movies');

router
  .use(bodyParser.json())
  .use('/users', user)
  .use('/movies', movies)

module.exports = router;
