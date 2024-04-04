const mongoose = require("mongoose");

// Define the Photo Schema
const photoSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  userId: {
    type: Number,
    required: true,
  },
  isHighLight: {
    type: Boolean,
    default: false,
  },
  photoUrl: {
    type: String,
    required: true,
  },
});

// Create the Photo model
const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo;
