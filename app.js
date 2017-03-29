var express = require('express');
var path = require('path');
//var redis = require('redis');
var favicon = require('serve-favicon');
var session = require('express-session');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var MongoStore = require('connect-mongo')(session);

global.sess;
//var routes = require('./routes/index');
//var users = require('./routes/users');
//Database

var checkDbConnection = require('./Database/dbConnection.js').getDbConnection();

var signup = require('./Database/Signup.js');
var signin = require('./Database/Signin.js');
var userid = require('./Database/userid.js');
var bankaccount = require('./Database/bankaccount.js');
var waterbill = require('./Database/waterbill.js');
var userbankdetails = require('./Database/userbankdetails.js');

var app = express();

// view engine setup

app.set('app', path.join(__dirname, 'app'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app')));
app.use(session({ 
  secret:'SEKR37',
  store: new MongoStore({url:'mongodb://localhost:27017/miniprojtest'})
}));

//app.use('/', routes);
//app.use('/users', users);
app.post('/signup',signup);
app.post('/login',signin);
app.get('/userId',userid);
app.post('/bankaccount',bankaccount);
app.post('/waterbill',waterbill);
app.get('/userbankdetails',userbankdetails);

// app.post('/signup',function(req,res){
//   console.log(req.body);
// });
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
