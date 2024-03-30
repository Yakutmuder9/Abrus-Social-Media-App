/*
============================================
; Title:  app.js
; Author: Yakut Ahmedin
; Date:   30 Mar 2024
; Description: Wina API
;===========================================
*/
require("dotenv").config();
require("express-async-handler");
const cors = require("cors");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/dbConn");
const corsOptions = require("./config/corsOptions");
const { logger, logEvents } = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

// // Constatnt
const app = express();
const port = process.env.PORT || 5000;

// // connect mongoDB url
connectDB();
app.use(logger);
// app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// // Connecting Routes
// // app.use("/api/auth", require("./routes/auth"));
// // app.use("/api/private", require("./routes/private"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, net) {
  // set locals, only provide error in devlopement
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "devlopment" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("MongoDB connected Successfully!");
  app.listen(port, () => console.log(`Server running on port ${port}`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log"
  );
});
