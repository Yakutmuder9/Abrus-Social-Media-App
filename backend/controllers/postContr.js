const asyncHandler = require("express-async-handler");
const { Post } = require("../models/Post");
const jwt = require("jsonwebtoken");
const cloudinary = require("../utils/cloudinary");
const { fileSizeFormatter } = require("../utils/fileUpload");

const createPost = asyncHandler(async (req, res) => {
  const { content } = req.body;

  console.log("req.file", req.file, content);

  // Validation
  if (!content && !req.file) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  // Handle Image upload
  let fileData = null;
  if (req.file) {
    try {
      // Save image to cloudinary
      const uploadedFile = await cloudinary.uploader.upload(req.file.path, {
        folder: "Pinvent App",
        resource_type: "image",
      });

      fileData = {
        fileName: req.file.originalname,
        filePath: uploadedFile.secure_url,
        fileType: req.file.mimetype,
        fileSize: fileSizeFormatter(req.file.size, 2),
      };
    } catch (error) {
      res.status(500);
      throw new Error("Image could not be uploaded");
    }
  }

  try {
    // Get user ID from the decoded JWT token
    const token = req.cookies.jwt;
    const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
    const userId = decoded.userId;

    // Create post
    const post = await Post.create({
      userId,
      content,
      image: fileData,
    });

    console.log(post);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const getPost = asyncHandler(async (req, res) => {
  const post = await Post.findOne(req.params.postId);
  // if post doesnt exist
  if (!post) {
    res.status(404);
    throw new Error("post not found");
  }
  // Match post to its user
  if (post.user.toString() !== req.user.postId) {
    res.status(401);
    throw new Error("User not authorized");
  }
  res.status(200).json(post);
});

const getPosts = asyncHandler(async (req, res) => {
  const post = await Post.find({ user: req.user.userId }).sort("-createdAt");
  res.status(200).json(post);
});
const updatePost = asyncHandler(async (req, res) => {});
const deletePost = asyncHandler(async (req, res) => {});

const getStories = asyncHandler(async (res, req) => {});
const createStorie = asyncHandler(async (res, req) => {});
const updateStorie = asyncHandler(async (res, req) => {});
const deleteStorie = asyncHandler(async (res, req) => {});

module.exports = {
  createPost,
  getPost,
  getPosts,
  updatePost,
  deletePost,
  getStories,
  createStorie,
  updateStorie,
  deleteStorie,
};
