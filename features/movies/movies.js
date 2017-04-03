const P = require('bluebird');
const config = require('../../config');
const { saveInDB } = require('../../utils/db');
const youtubeParser = require('../../utils/youtube-parser');
const { sendMovieSocket } = require('../../utils/wss');

const middleware = (req, res, next) => {
  const movieId = youtubeParser(req.body.movie.url);
  const movieUrl = {
    movie:  `https://www.youtube.com/embed/${movieId}?controls=1`,
    username: req.body.movie.username,
  }
  return new P((resolve, reject) => resolve(saveInDB('movies',movieUrl)))
    .then(result => {
      sendMovieSocket(movieUrl);
      return true;
    })
    .catch(next)
}

module.exports = middleware;
