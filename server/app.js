require("dotenv").config({ path: "./config.env" });
var createError = require('http-errors');
var express = require('express');
var cors = require('cors')
var path = require('path');
var logger = require('morgan');
const config = require('./config');
const bodyParser = require("body-parser");

const cookieParser = require("cookie-parser");
const mongoose = require('mongoose');

const url = config.mongoUrl
const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});



connect.then(() => console.log('Connected correctly to server'),
  err => console.log(err)
);


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//access-control-allow-credentials
const corsOptions ={
  origin:['https://wina-app.netlify.app', "https://wina-social-app.herokuapp.com"], 
  credentials:true,            
  optionSuccessStatus:200
}
app.use(cors(corsOptions));




app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, 'public')));

// Connecting Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'production' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
