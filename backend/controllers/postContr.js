const asyncHandler = require("express-async-handler");
const { Post, Storie } = require("../models/Post");
const cloudinary = require("../utils/cloudinary");
const { fileSizeFormatter } = require("../utils/fileUpload");

// ----------Post function start here------------
const createPost = asyncHandler(async (req, res) => {
  const { content } = req.body;
  const userId = req.user;

  // Validation
  if (!content && !req.file) {
    res
      .status(404)
      .json({ success: false, error: "Please fill in all fields!" });
  }
  // Handle Image upload
  let fileData = null;
  if (req.file && req.user) {
    try {
      // Save image to cloudinary
      const uploadedFile = await cloudinary.uploader.upload(req.file.path, {
        folder: "Wina",
        resource_type: "image",
      });

      fileData = {
        fileName: req.file.originalname,
        filePath: uploadedFile.secure_url,
        fileType: req.file.mimetype,
        fileSize: await fileSizeFormatter(req.file.size, 2),
      };

      // Create post
      const post = await Post.create({
        userId,
        content,
        image: [fileData],
      });

      res.status(200).json({ message: "post successfull!" });
    } catch (error) {
      res.status(500);
      throw new Error("Image could not be uploaded");
    }
  } else {
    res.status(500);
    throw new Error("User not authorized");
  }
});

const getPost = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findOne({ userId: req.user, postId: id });

    // if post doesnt exist
    if (!post) {
      res.status(404).json({ success: false, error: "Post Not Found!" });
    }

    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

const getPosts = asyncHandler(async (req, res) => {
  try {
    const post = await Post.find({ userId: req.user }).sort("-createdAt");
    // if post doesnt exist
    if (!post) {
      res.status(404).json({ success: false, error: "Post Not Found!" });
    }

    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

const updatePost = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findOne({ userId: req.user, postId: id });

    // if post doesnt exist
    if (!post) {
      res.status(404).json({ success: false, error: "Post Not Found!" });
    }

    let updatedFields = {}; // Initialize an empty object to store updated fields

    if (req.body.content) {
      updatedFields.content = req.body.content;
    }

    if (req.file) {
      // Save image to Cloudinary
      const uploadedFile = await cloudinary.uploader.upload(req.file.path, {
        folder: "Wina",
        resource_type: "image",
      });

      const fileData = {
        fileName: req.file.originalname,
        filePath: uploadedFile.secure_url,
        fileType: req.file.mimetype,
        fileSize: await fileSizeFormatter(req.file.size, 2),
      };

      updatedFields.image = [fileData]; // Update image field in the post
    }

    // Update post
    const updatedPost = await Post.findOneAndUpdate(
      { userId: req.user, postId: id },
      updatedFields, // Apply the updated fields
      {
        new: true, // Return the updated document
        runValidators: true, // Run validation checks on the update
      }
    );

    res.status(200).json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

const deletePost = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.deleteOne({ userId: req.user, postId: id });

    // if post doesnt exist
    if (!post) {
      res.status(404).json({ success: false, error: "Post Not Found!" });
    }

    res.status(200).json({ message: "Post deleted." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

// ----------Stories function start here------------
const getStorie = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const storie = await Storie.findOne({ userId: req.user, storieId: id });

    // if storie doesnt exist
    if (!storie) {
      res.status(404).json({ success: false, error: "Storie Not Found!" });
    }

    res.status(200).json("storie");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

const createStorie = asyncHandler(async (req, res) => {
  try {
    const userId = req.user;

    // Validation
    if (!req.file) {
      res
        .status(400)
        .json({ success: false, error: "Please fill in all fields" });
    }

    // Handle Image upload
    let fileData = null;
    if (req.file && req.user) {
      // Save image to cloudinary
      const uploadedFile = await cloudinary.uploader.upload(req.file.path, {
        folder: "Wina",
        resource_type: "image",
      });

      fileData = {
        url: uploadedFile.secure_url,
        fileSize: await fileSizeFormatter(req.file.size, 2),
      };

      // Create storie
      const storie = await Storie.create({
        userId,
        image: fileData,
      });

      res.status(200).json({ message: "storie created successfull!" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

const updateStorie = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const storie = await Storie.findOne({ userId: req.user, storieId: id });

    // if post doesn't exist
    if (!storie) {
      res.status(404).json({ success: false, error: "Storie Not Found!" });
    }

    let updatedFields = {}; // Initialize an empty object to store updated fields
    if (req.file) {
      // Save image to Cloudinary
      const uploadedFile = await cloudinary.uploader.upload(req.file.path, {
        folder: "Wina",
        resource_type: "image",
      });

      fileData = {
        url: uploadedFile.secure_url,
        fileSize: await fileSizeFormatter(req.file.size, 2),
      };

      updatedFields.image = fileData; // Update image field in the post

      // Update post
      const updatedStorie = await Storie.findOneAndUpdate(
        { userId: req.user, storieId: id },
        updatedFields, // Apply the updated fields
        {
          new: true, // Return the updated document
          runValidators: true, // Run validation checks on the update
        }
      );

      res.status(200).json(updatedStorie);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

const deleteStorie = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const stoire = await Stoire.deleteOne({ userId: req.user, stoireId: id });

    // if post doesnt exist
    if (!stoire) {
      res.status(404).json({ success: false, error: "Storie Not Found!" });
    }

    res.status(200).json({ message: "stoire deleted." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = {
  createPost,
  getPost,
  getPosts,
  updatePost,
  deletePost,
  getStorie,
  createStorie,
  updateStorie,
  deleteStorie,
};
