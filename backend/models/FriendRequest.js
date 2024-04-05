const mongoose = require("mongoose");

// Define schema for recommend_friends array
const recommendFriendSchema = new mongoose.Schema({
  userId: {
    type: Number, // Assuming userId is of type Number
    required: true,
  },
  mutualCount: {
    type: Number,
    required: true,
  },
});

// Define schema for friend_requests array
const friendRequestSchema = new mongoose.Schema({
  userId: {
    type: Number, // Assuming userId is of type Number
    required: true,
  },
  mutualCount: {
    type: Number,
    required: true,
  },
});

// Create Mongoose models for both arrays
const RecommendFriend = mongoose.model(
  "RecommendFriend",
  recommendFriendSchema
);
const FriendRequest = mongoose.model("FriendRequest", friendRequestSchema);

module.exports = { RecommendFriend, FriendRequest };
