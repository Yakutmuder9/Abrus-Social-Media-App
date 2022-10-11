const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    title: {
      type: 'String',
      required: [true, 'Please title is required'],
    },
    description: {
      type: 'String',
      required: [true, 'Please description is required'],
    },
  },
  {
    timestamps: true,
  }
);

//Compile
const Post = mongoose.model('Post', postSchema);

module.exports = { Post };