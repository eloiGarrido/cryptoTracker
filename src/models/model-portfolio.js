'use strict';

const mongoose = require('mongoose');
const DB_MODEL = 'Portfolio';

let Schema = mongoose.Schema;
let modelSchema = new Schema({
  name: {
    type: String,
    max: 100,
    index: true,
    required: true
  },
  currencies: [{
    type: Schema.ObjectId,
    ref: 'Currency'
  }],
  value: {
    type: Number,
    min: 0,
    default: 0
  },
});

modelSchema
  .virtual('url')
  .get(() => {
    return '/portfolio/' + this._id;
  });


module.exports = mongoose.model(DB_MODEL, modelSchema);