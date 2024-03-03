var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.time("viewposttime");
  res.render('viewpost'); 
  console.timeEnd("viewposttime");
});

module.exports = router;