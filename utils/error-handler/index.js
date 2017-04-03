const middleware = require('./middleware');

const create = code => {
  const err = new Error(code)
  return err;
};

module.exports = {
  middleware,
  create
};
