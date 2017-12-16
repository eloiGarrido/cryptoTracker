const express = require('express');
const router = express.Router();

const currencyController = request('../src/controllers/currencyController');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'CryptoWatcher'});
});

router.post('/add_coin', function (req, res, next) {
  console.log('Hello there sexy!');
  console.log(req.body);
});


// Currency Routes
route.get('/currency', currencyController.currency_list);
route.get('/currency/:id', currencyController.currency_detail);
route.post('/currency/create', currencyController.currency_create_post);

module.exports = router;
