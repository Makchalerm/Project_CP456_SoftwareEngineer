var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.time("registertime");
  res.render('register');
  console.timeEnd("registertime");
});


module.exports = router;
