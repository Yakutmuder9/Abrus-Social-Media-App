const asyncHandler = require("express-async-handler");
const Post = require("../modals/Post");
const User = require("../modals/User");
const { fileSizeFormatter } = require("../utils/fileUpload");
const cloudinary = require("cloudinary").v2;



//Create post
const createPost = asyncHandler(async (req, res) => {
  const { description, like, share, comments, image } = req.body;
  
  //   Validation
  if (!description) {
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
    // Create post
    const post = await Post.create({
      user: req.user.id,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      profile_pic: req.user.profile_pic,
      description,
      like,
      share,
      comments,
      image: fileData
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500);
    throw new Error("Dupplicate Error");
  }

});


//get posts
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({ user: req.user.id }).sort("-createdAt");
  res.status(200).json(posts);
});

//get post
const getPost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  // if post doesnt exist
  if (!post) {
    res.status(404);
    throw new Error("post not found");
  }
  // Match post to its user
  if (post.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  res.status(200).json(post);
});

//update post
const updatePost = asyncHandler(async (req, res) => {
  const { name, category, quantity, price, description } = req.body;
  const { id } = req.params;

  const post = await Post.findById(id);

  // if post doesnt exist
  if (!post) {
    res.status(404);
    throw new Error("post not found");
  }
  // Match post to its user
  if (post.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
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

  // Update post
  const updatedPost = await Post.findByIdAndUpdate(
    { _id: id },
    {
      name,
      category,
      quantity,
      price,
      description,
      image: Object.keys(fileData).length === 0 ? post?.image : fileData,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json(updatedPost);
});

//Delete post
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  // if post doesnt exist
  if (!post) {
    res.status(404);
    throw new Error("post not found");
  }
  // Match post to its user
  if (post.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  await post.remove();
  res.status(200).json({ message: "post deleted." });
});

module.exports = { createPost, getPosts, getPost, updatePost, deletePost };