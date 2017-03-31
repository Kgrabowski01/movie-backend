const config = require('../config');

let connectionIDCounter = 0;
const connections = {};
const originIsAllowed = () => true;

const wss = request => {
  if (!originIsAllowed(request.origin)) {
    request.reject();
    console.log( `${config.errors.rejectedWS}${request.origin}`);
    return;
  }
  const connection = request.accept(null, request.origin);
  connection.id = connectionIDCounter ++;
  connections[connection.id] = connection;
  connection.on('close', (reasonCode, description) => {
    delete connections[connection.id];
  });
};

const sendMovieSocket = (data) => {
  Object.keys(connections).forEach(key => {
    const connection = connections[key];
    if (connection.connected) {
      connection.send(JSON.stringify(data));
    }
  });
}

module.exports = {
  wss,
  sendMovieSocket,
}
