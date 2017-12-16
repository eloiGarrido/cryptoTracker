'use strict';

const mongoose = require('mongoose');
const DB_MODEL = 'Currency';

let Schema = mongoose.Schema;
let modelSchema = new Schema({
  name: {
    type: String,
    max: 100,
    index: true,
    required: true
  },
  amount: {
    type: Number,
    min: 0,
    default: 0
  },
  value: {
    type: Number,
    min: 0,
    default: 0
  },
});

modelSchema
  .virtual('url')
  .get(() => {
    return '/currency/' + this._id;
  });


module.exports = mongoose.model(DB_MODEL, modelSchema);