const router = require('express').Router();
const P = require('bluebird');
const config = require('../config');
const { findInDB , saveInDB } = require('../utils/db');
const createToken = require('../utils/generate-token');

router
  .route('/')
    .post((req, res) => {
      const response = {};
      return new P( (resolve, reject) =>
        resolve(findInDB('user','username', req.body.user.username)))
          .then(result => {
            if (result.length > 0) {
              response.error = config.errors.userExist;
              return res.send(response);
            }
          })
          .then(() => saveInDB('user', req.body.user))
          .then(() => {
            response.succes = config.userCreated;
            return res.send(response);
          })
    });

module.exports = router;
