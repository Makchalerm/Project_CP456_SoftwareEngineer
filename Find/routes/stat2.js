var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.time("stattime");
  res.render('stat2');
  console.timeEnd("stattime");
});


module.exports = router;
