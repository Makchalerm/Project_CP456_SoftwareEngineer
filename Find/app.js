var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var PORT = 8080;

var indexRouter = require('./routes/index');
var registerRouter = require('./routes/register');
var viewpostRouter = require('./routes/viewpost');
var stat2Router = require('./routes/stat2');
var graphRouter = require('./routes/graph');
var MyArray = require('./MyArray');

var array = new MyArray();

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/viewpost', viewpostRouter);
app.use('/stat2', stat2Router);
app.use('/graph', graphRouter);




app.post("/viewpost", function (req, res, next) {
  console.time("postviewposttime");
  element = {
    "cname": req.body.cname,
    "wage": Number(req.body.wage),
    "job": req.body.job,
    "tel": req.body.tel
  }
  array.push(element);

  res.render('viewpost', { size: array.size(), array: array.pop() });
  console.timeEnd("postviewposttime");
});

app.get("/viewpost2", function (req, res) {
  res.render('viewpost', { size: array.size(), array: array.pop() });
});

app.post("/stat2", function (req, res, next) {
  console.time("poststattime");
  let numary = array.size();
  if (numary == 0) {
    res.render('register')
  } else {


    res.render('stat2', {
      max: array.getMax(), min: array.getMin(), dancer: array.getCountDancer(), singer: array.getCountSinger()
      , doctor: array.getCountDoctor(), actor: array.getCountActor(), teacher: array.getCountTeacher(), avg: array.getAvg()

    });
  }
  console.timeEnd("poststattime");
});

app.get("/stat3", function (req, res) {
  let numary = array.size();
  if (numary == 0) {
    res.render('register')
  } else {
    res.render('stat2', {
      max: array.getMax(), min: array.getMin(), dancer: array.getCountDancer(), singer: array.getCountSinger()
      , doctor: array.getCountDoctor(), actor: array.getCountActor(), teacher: array.getCountTeacher(), avg: array.getAvg()

    });
  }
});

app.post("/graph", function (req, res, next) {
  console.time("postgraphtime");

  var dancerA = array.getCountDancer();
  var singerA = array.getCountSinger();
  var doctorA = array.getCountDoctor();
  var actorA = array.getCountActor();
  var teacherA = array.getCountTeacher();
  res.render('graph', {
    dancer: dancerA, singer: singerA
    , doctor: doctorA, actor: actorA, teacher: teacherA
  });
  console.timeEnd("postgraphtime");
});

app.get("/graph2", function (req, res) {
  var dancerA = array.getCountDancer();
  var singerA = array.getCountSinger();
  var doctorA = array.getCountDoctor();
  var actorA = array.getCountActor();
  var teacherA = array.getCountTeacher();
  res.render('graph', {
    dancer: dancerA, singer: singerA
    , doctor: doctorA, actor: actorA, teacher: teacherA
  });
});


app.listen(PORT, function () {
  console.log('Server listing on PORT http://127.0.0.1:', PORT)
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});



module.exports = app;