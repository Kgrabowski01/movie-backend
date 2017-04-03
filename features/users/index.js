const router = require('express').Router();

const login = require('./login');
const createUser = require('./create-user');

router
  .route('/')
    .post(login);

router
  .route('/create')
    .post(createUser);

module.exports = router;
