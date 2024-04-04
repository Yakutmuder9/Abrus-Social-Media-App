// Import Mongoose
const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

// Define the Schema for Groups
const groupSchema = new mongoose.Schema({
  groupId: Number,
  name: String,
  isPublic: Boolean,
  isJoined: Boolean,
  member: Number,
  coverUrl: String,
  postPerDay: Number,
  friendsInGroup: [
    {
      userId: Number,
    },
  ],
  isPin: Boolean,
  avatarUrl: String,
});

// Define the Schema for Group Posts
const groupPostSchema = new mongoose.Schema({
  groupPostId: Number,
  image: String,
  create_at: String,
  content: String,
  userId: Number,
  reactions: {
    love: Number,
    like: Number,
    haha: Number,
  },
  permission: Number,
  group: {
    id: Number,
    name: String,
  },
  comments: [
    {
      id: Number,
      name: String,
      avatarUrl: String,
      image: String,
      content: String,
      createUt: String,
    },
  ],
});

// Define the Schema for Group Categories
const groupCategorySchema = new mongoose.Schema({
  groupCategoryId: Number,
  name: String,
  tags: [String],
  isPopular: Boolean,
  avatar_url: String,
  groups: [
    {
      groupId: Number,
    },
  ],
});

userSchema.plugin(AutoIncrement, {
  inc_field: "group",
  start_seq: 100,
});
userSchema.plugin(AutoIncrement, {
  inc_field: "groupPost",
  start_seq: 100,
});
userSchema.plugin(AutoIncrement, {
  inc_field: "groupCategory",
  start_seq: 100,
});


// Create Models based on the Schemas
const Group = mongoose.model("Group", groupSchema);
const GroupPost = mongoose.model("GroupPost", groupPostSchema);
const GroupCategory = mongoose.model("GroupCategory", groupCategorySchema);

// Export the Models
module.exports = { Group, GroupPost, GroupCategory };
