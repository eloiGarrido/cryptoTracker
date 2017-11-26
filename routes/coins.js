const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.send('Coin main route');
});

router.post('/', function(req, res) {
  console.log('Hello there sexy!');
  console.log(req.body);
});

module.exports = router;