// Import Mongoose
const mongoose = require("mongoose");

// Define the Event Schema
const eventSchema = new mongoose.Schema({
  isOverTime: {
    type: Boolean,
    default: false,
  },
  pageId: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  shortTime: {
    month: {
      type: String,
      required: true,
    },
    date: { type: Number, required: true },
  },
  address: {
    type: String,
    required: true,
  },
  fullTime: {
    ype: String,
    required: true,
  },
});

// Create the Event model
const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
