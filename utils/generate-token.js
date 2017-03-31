const jwt = require('jsonwebtoken');

const createToken = (data, secret) => {
  return token = {
    token: jwt.sign(data, secret, {
      expiresIn : 60*60*24
    }),
    authorization: true,
  };
};

module.exports = createToken;
