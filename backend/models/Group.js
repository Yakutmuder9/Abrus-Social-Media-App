// Import Mongoose
const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

// Define the Schema for Groups
const groupSchema = new mongoose.Schema({
  groupId: { type: Number, unique: true },
  groupName: String,
  isPublic: Boolean,
  isJoined: Boolean,
  member: Number,
  coverUrl: String,
  postPerDay: Number,
  userId: Number,
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
  groupPostId: { type: Number, unique: true },
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
  groupCategoryId: { type: Number, unique: true },
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

groupSchema.plugin(AutoIncrement, {
  inc_field: "groupId",
  start_seq: 100,
});
groupPostSchema.plugin(AutoIncrement, {
  inc_field: "groupPostId",
  start_seq: 100,
});
groupCategorySchema.plugin(AutoIncrement, {
  inc_field: "groupCategoryId",
  start_seq: 100,
});

// Create Models based on the Schemas
const Group = mongoose.model("Group", groupSchema);
const GroupPost = mongoose.model("GroupPost", groupPostSchema);
const GroupCategory = mongoose.model("GroupCategory", groupCategorySchema);

// Export the Models
module.exports = { Group, GroupPost, GroupCategory };
