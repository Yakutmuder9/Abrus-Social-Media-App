const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const postSchema = new mongoose.Schema(
  {
    postId: {
      type: Number,
      unique: true,
    },
    image: [String],
    createdAt: {
      type: String,
    },
    content: String,
    userId: Number,
    reactions: {
      love: Number,
      like: Number,
      haha: Number,
    },
    permission: Number,
    comments: [
      {
        commentId: { type: Number, unique: true },
        fullName: String,
        userId: String,
        avatorUrl: String,
        image: String,
        content: String,
        createdAt: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const storieSchema = new mongoose.Schema(
  {
    storieId: {
      type: Number,
      unique: true,
    },
    userId: {
      type: Number,
      unique: true,
    },
    image: [
      {
        storieImgId: Number,
        url: String,
        viewed: Boolean,
        createdAt: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Add the auto-incrementing ID field
postSchema.plugin(AutoIncrement, { inc_field: "postId", start_seq: 100 });
// postSchema.plugin(AutoIncrement, { inc_field: "commentId", start_seq: 100 });
storieSchema.plugin(AutoIncrement, { inc_field: "storieId", start_seq: 100 });

const Storie = mongoose.model("Storie", storieSchema);
const Post = mongoose.model("Post", postSchema);

module.exports = { Storie, Post };
