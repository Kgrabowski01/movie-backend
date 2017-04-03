const P = require('bluebird');
const config = require('../../config');
const { findInDB } = require('../../utils/db');
const createToken = require('../../utils/generate-token');

const middleware = (req, res, next) =>
  P.resolve(findInDB('movies','username', req.body.username))
    .then(result => res.send(result))
    .catch(next)

module.exports = middleware;
