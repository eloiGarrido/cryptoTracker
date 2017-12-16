'use strict';

let Currency = require('../models/model-currency');

function currency_list(req, res) {
  Currency
    .find()
    .limit(1000)
    .exec((err, list_currency) => {
      if (err) {
        return next(err);
      }
      res.send(list_currency);
    });

  res.send('Not Implemented: Currency list');
}

// Display detail page for a specific Genre
function currency_detail(req, res) {
  res.send('NOT IMPLEMENTED: Genre detail: ' + req.params.id);
}

function currency_create_post(req, res) {
  res.send('Not implemented: Currency create POST')
}

module.exports = {
  currency_list: currency_list,
  currency_detail: currency_detail,
  currency_create_post: currency_create_post
};
