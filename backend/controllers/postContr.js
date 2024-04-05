const asyncHandler = require("express-async-handler");
const { Post } = require("../models/Post");
const jwt = require("jsonwebtoken");

const createPost = asyncHandler(async (req, res) => {
  const { content } = req.body;

  // Validation
  if (!content && !req.file) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  // Handle Image upload
  let fileData = {};
  if (req.file) {
    // Save image to cloudinary
    let uploadedFile;
    try {
      uploadedFile = await cloudinary.uploader.upload(req.file.path, {
        folder: "Pinvent App",
        resource_type: "image",
      });
    } catch (error) {
      res.status(500);
      throw new Error("Image could not be uploaded");
    }

    fileData = {
      fileName: req.file.originalname,
      filePath: uploadedFile.secure_url,
      fileType: req.file.mimetype,
      fileSize: fileSizeFormatter(req.file.size, 2),
    };
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
      image: fileData || null,
    });

    console.log(post);
    res.status(201).json(post);
  } catch (error) {
    res.status(500);
    throw new Error("Dupplicate Error");
  }
});

const getPost = asyncHandler(async (req, res) => {});
const getPosts = asyncHandler(async (req, res) => {});
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
