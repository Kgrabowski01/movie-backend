const router = require('express').Router();
const P = require('bluebird');
const config = require('../config');
const { findInDB } = require('../utils/db');
const createToken = require('../utils/generate-token');

router
  .route('/')
    .post((req, res) =>
      new P( (resolve, reject) =>
        resolve(findInDB('movies','username', req.body.username)))
          .then(result => res.send(result))
    );

module.exports = router;
