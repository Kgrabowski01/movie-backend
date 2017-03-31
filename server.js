const express = require('express')
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient;
const WebSocketServer = require('websocket').server;
const server = require('http').createServer();
const config = require('./config');
const apiRouter = require('./features/api');
const { wss } = require('./utils/wss')
const app = express();

const wsServer = new WebSocketServer({
  httpServer: server,
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.set('superSecret', config.secret)
app.use('/', apiRouter)
server.on('request', app);
wsServer.on('request', wss)

server.listen(config.port, () => console.log(`${config.listeningMsg}${config.port}`));
