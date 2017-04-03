const config = require('../../config');
const { findInDB , saveInDB } = require('../../utils/db');
const createToken = require('../../utils/generate-token');
const createErr = require('../../utils/error-handler').create;

const middleware = (req, res, next) => {
  const response = {};
  findInDB('user','username', req.body.user.username)
    .then(result => {
      if (result.length > 0) {
        return next(createErr(config.errors.userExist));
      }
    })
    .then(() => saveInDB('user', req.body.user))
    .then(() => {
      response.succes = config.userCreated;
      return res.send(response);
    })
    .catch(next)
};

module.exports = middleware;
