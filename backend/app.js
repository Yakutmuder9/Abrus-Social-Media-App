/*
============================================
; Title:  app.js
; Author: Yakut Ahmedin
; Date:   09 April 2023
; Description: Wina API
;===========================================
*/
const express = require('express');
const mongoose = require('mongoose');


// Constatnt
const app = express();
const port = process.env.PORT || 5000;

// const url = process.env.MONGODB_URL;
const url = "mongodb://127.0.0.1:27017/admin";

mongoose.set("strictQuery", false);

// connect mongoDB url
const connect = mongoose.connect(url, {});

connect.then(
  () => console.log("MongoDB connected Successfully!"),
  (err) => console.log(err))