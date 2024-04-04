const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const watchVideoSchema = new mongoose.Schema(
  {
    watchVideoId: {
      type: Number,
      unique: true,
    },
    pageId: Number,
    watchThreadId: Number,
    isFollowed: Boolean,
    seeCount: Number,
    isSean: Boolean,
    isPopular: Boolean,
    title: String,
    video: {
      coverUrl: String,
      videoUrl: String,
    },

    createAt: String,
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
  },
  {
    timestamps: true,
  }
);

userSchema.plugin(AutoIncrement, {
  inc_field: "watchVideoId",
  start_seq: 100,
});

// Define Schema for Watch Thread
const recommendedFriendSchema = new mongoose.Schema({
  id: Number,
  name: String,
});

const RarecommendedFriend = mongoose.model(
  "RarecommendedFriend",
  recommendedFriendSchema
);
const WatchVideo = mongoose.model("WatchVideo", watchVideoSchema);
module.exports = { RarecommendedFriend, WatchVideo };
