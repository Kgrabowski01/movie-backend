const MongoClient = require('mongodb').MongoClient;
const config = require('../config');
const P = require('bluebird');
var db

MongoClient.connect(config.dbUrl, (err, database) => {
  if (err) {
    return console.log(err);
  }
  db = database;
});

const findInDB = (path, key, query) =>
  new P((resolve, reject) => db.collection(path)
    .find({[key]: query})
    .toArray((err, result) => {
      if (err) {
        return resolve(console.log(err));
      }
      return resolve(result);
    }))
    .catch(err => console.log(err))


const saveInDB = (path, obj) =>
  new P((resolve, reject) => db.collection(path)
    .save(obj, (err, result) => {
      return resolve(result);
    }))
    .catch(err => console.log(err))

module.exports = {
  findInDB,
  saveInDB,
};
