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

// Add the auto-incrementing ID field
userSchema.plugin(AutoIncrement, { inc_field: "postId", start_seq: 100 });
userSchema.plugin(AutoIncrement, { inc_field: "commentId", start_seq: 100 });

module.exports = mongoose.model("Post", postSchema);
