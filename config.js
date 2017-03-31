const config = {
  secret: 'ilovescotchyscotch',
  port: 9000,
  dbUrl: 'mongodb://test:test@ds115110.mlab.com:15110/filmiki-test',
  listeningMsg: 'Backend listening on port ',
  userCreated: 'User created!',
  errors: {
    rejectedWS: 'Rejected connection from origin ',
    unknowUser: 'Unknow username',
    userExist: 'User exist',
    wrongPassword: 'Wrong password'
  }
}

module.exports = config;
