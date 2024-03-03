var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.time("indextime");
  res.render('index', { title: 'Express' });
  console.timeEnd("indextime");
});

module.exports = router;
