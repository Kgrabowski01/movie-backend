const config = require('../../config');
const { findInDB } = require('../../utils/db');
const createToken = require('../../utils/generate-token');
const createErr = require('../../utils/error-handler').create;

const middleware = (req, res, next) =>
  findInDB('user','username', req.body.login.username)
    .then(result => {
      if (result.length === 0) {
        return next(createErr(config.errors.unknowUser));
      }
      if(result[0].password !== req.body.login.password) {
        return next(createErr(config.errors.wrongPassword));
      }
      const token = createToken(result[0], config.secret);
      return res.send(token);
    })
    .catch(next)

module.exports = middleware;
