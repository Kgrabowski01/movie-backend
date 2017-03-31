const router = require('express').Router();
const P = require('bluebird');
const config = require('../config');
const { findInDB } = require('../utils/db');
const createToken = require('../utils/generate-token');

router
  .route('/')
    .post((req, res) =>
      new P( (resolve, reject) =>
        resolve(findInDB('user','username', req.body.login.username)))
          .then(result => {
            const error = {}
            if (result.length === 0) {
              error.message = config.errors.unknowUser;
              return res.send(error);
            }
            if(result[0].password !== req.body.login.password) {
              error.message = config.errors.wrongPassword;
              return res.send(error);
            }
            const token = createToken(result[0], config.secret);
            return res.send(token);
          })
    );

module.exports = router;
