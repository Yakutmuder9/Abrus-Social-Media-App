// Import Mongoose
const mongoose = require("mongoose");

// Define the Product Schema
const productSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  type: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  statusTxt: {
    type: String,
    required: true,
  },
  relatedGroups: [
    {
      type: Number,
      required: true,
    },
  ],
  sellLocation: {
    type: String,
    required: true,
  },
});

// Create the Product model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
