'use strict';

const mongoose = require(mongoose);
const autoIncrement = require('mongoose-auto-increment');

const startDatabase = function (callback) {
  // Early return if connection has already been established
  if (mongoose.connection.readyState !== 0) {
    return callback(null, mongoose.connection);
  }
  const DB_USER = process.env.DB_USER || 'writeUser';
  const DB_PASS = process.env.DB_PASS || undefined;
  const DB_POOLSIZE = process.env.DB_POOLSIZE || 1;

  const DB_URI = process.env.DB_URI || 'mongodb://127.0.0.1:27017/cryptoTracker';

  let options = {
    user: DB_USER,
    pass: DB_PASS,
    server: {poolSize: DB_POOLSIZE}
  };

  mongoose.connect(DB_URI, options);

  let db = mongoose.connection;
  // Initialize auto increment
  autoIncrement.initialize(db);

  db.on('error', (err) => {
    callback(err);
  });

  db.once('open', () => {
    callback(null, db);
  });

};


const connectClient = function () {

  const DB_USER = process.env.DB_USER || 'writeUser';
  const DB_PASS = process.env.DB_PASS || undefined;
  const DB_POOLSIZE = process.env.DB_POOLSIZE || 1;

  const DB_URI = process.env.DB_URI || 'mongodb://127.0.0.1:27017/cryptoTracker';

  let options = {
    user: DB_USER,
    pass: DB_PASS,
    server: {poolSize: DB_POOLSIZE}
  };

  let db = mongoose.createConnection(DB_URI, options);
  // Initialize auto increment
  autoIncrement.initialize(db);

  return db;
};

module.exports = {
  startDatabase: startDatabase,
  connectClient: connectClient
};