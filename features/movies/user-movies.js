const P = require('bluebird');
const config = require('../../config');
const { findInDB } = require('../../utils/db');
const createToken = require('../../utils/generate-token');

const middleware = (req, res, next) =>
  new P( (resolve, reject) =>
    resolve(findInDB('movies','username', req.body.username)))
      .then(result => res.send(result))
      .catch(next)

module.exports = middleware;
