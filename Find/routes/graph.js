var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.time("graphtime");
  res.render('graph');
  console.timeEnd("graphtime");
});

module.exports = router;
