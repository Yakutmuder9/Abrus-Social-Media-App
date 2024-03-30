require("dotenv").config({path: './config.env'});
var createError = require('http-errors');
var express = require('express');
var cors = require('cors')
var path = require('path');
var logger = require('morgan');
const config = require('./config');
const bodyParser = require("body-parser");

const cookieParser = require("cookie-parser");
const mongoose = require('mongoose');

// const url = config.mongoUrl
// const url = 'mongodb+srv://wina:1536@wina.wunt3oa.mongodb.net/wina?retryWrites=true&w=majority'
const url = 'mongodb://127.0.0.1:27017/admin'
const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

connect.then(() => console.log('Connected correctly to server'),
  err => console.log('Connected correctly to server', err)
);


const app = express();
app.use(cors({
  origin: "http://127.0.0.1:5500/Test/test.html"
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// const corsOptions ={
//   origin:'*', 
//   credentials:true,            
//   optionSuccessStatus:200
// }

// const corsOptions ={
//   origin:['https://wina-app.netlify.app', 'http://localhost:3000', "https://wina-social-app.herokuapp.com"], 
//   credentials:true,            
//   optionSuccessStatus:200
// }
// app.use(cors(corsOptions));

// Allow requests from specific origins
const corsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true, // If your frontend sends cookies, set this to true
};
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
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;



















