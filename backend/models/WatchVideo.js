const mongoose = require("mongoose");

// Define Schema for Watch Video
const WatchVideoSchema = new mongoose.Schema({
  id: Number,
  pageId: Number,
  watchThreadId: Number,
  isFollowed: Boolean,
  seeCount: Number,
  isSeen: Boolean,
  isPopular: Boolean,
  title: String,
  video: {
    cover_url: String,
    video_url: String,
  },
  create_at: String,
  content: String,
  reactions: {
    love: Number,
    like: Number,
    haha: Number,
  },
  permission: Number,
  comments: [
    {
      id: Number,
      name: String,
      avatarUrl: String,
      image: String,
      content: String,
      createAt: String,
    },
  ],
});

// Define Schema for Watch Thread
const WatchThreadSchema = new mongoose.Schema({
  id: Number,
  name: String,
});

// Define Schema for Watch Search Recommends
const WatchSearchRecommendSchema = new mongoose.Schema({
  pageId: Number,
});

// Create models based on the defined schemas
const WatchVideo = mongoose.model("WatchVideo", WatchVideoSchema);
const WatchThread = mongoose.model("WatchThread", WatchThreadSchema);
const WatchSearchRecommend = mongoose.model(
  "WatchSearchRecommend",
  WatchSearchRecommendSchema
);

// Export the models
module.exports = { WatchVideo, WatchThread, WatchSearchRecommend };
