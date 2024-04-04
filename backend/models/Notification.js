// Import Mongoose
const mongoose = require("mongoose");

// Define the Notification Schema
const notificationSchema = new mongoose.Schema({
  isSeen: { type: Boolean, default: false },
  isPopular: { type: Boolean, default: false },
  type: { type: Number, required: true }, // Assuming type is a number field
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  group_postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  groupId: { type: mongoose.Schema.Types.ObjectId, ref: "Group" },
  createdAt: { type: Date, default: Date.now },
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
});

// Create the Notification model
const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;
