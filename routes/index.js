var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CryptoWatcher' });
});

// router.post('/coins', function(req, res) {
//   console.log('Hellooooooooooooooooo!');
//   // console.log(req.body);
// });



module.exports = router;
