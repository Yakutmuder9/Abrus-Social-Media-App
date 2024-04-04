const mongoose = require("mongoose");

// Define schema for page_posts
const pagePostSchema = new mongoose.Schema({
  id: Number,
  image: String,
  create_at: String,
  content: String,
  pageId: Number,
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
      create_at: String,
    },
  ],
});

// Define schema for pages
const pageSchema = new mongoose.Schema({
  id: Number,
  name: String,
  categoryName: String,
  mail: String,
  like_count: Number,
  follow_count: Number,
  coverUrl: String,
  fan_count: Number,
  fans: [Number],
  friendsLikePage: [Number],
  website: String,
  phone: String,
  description: {
    title: String,
    content: String,
  },
  avatarUrl: String,
});

// Create models
const PagePost = mongoose.model("PagePost", pagePostSchema);
const Page = mongoose.model("Page", pageSchema);

module.exports = { PagePost, Page };
