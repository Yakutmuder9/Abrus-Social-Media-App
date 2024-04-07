const asyncHandler = require("express-async-handler");
const { Group } = require("../models/Group");
const cloudinary = require("../utils/cloudinary");
const { fileSizeFormatter } = require("../utils/fileUpload");

// ----------Groups function start here------------
const getGroups = asyncHandler(async (req, res) => {
  try {
    // Find the group associated with the user
    const group = await Group.findOne({ userId: req.user });

    // Check if group exists
    if (!group) {
      res
        .status(404)
        .json({ success: false, error: "Sorry, you don't have any group!" });
      return;
    }

    // Successful response
    res.status(200).json({ success: true, data: group });
  } catch (error) {
    // Log the error for debugging
    console.error("Error in getGroups:", error);

    // response to the client
    res.status(500).json({ success: false, error: "Server Error" });
  }
});

const getGroup = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const group = await Group.findOne({ userId: req.user, groupId: id });

    // Check if group exists
    if (!group) {
      return res
        .status(404)
        .json({ success: false, error: "Sorry, group not found" });
    }

    // Custom response object
    const response = {
      success: true,
      data: group,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error(error);

    // Custom error response for server error
    const response = {
      success: false,
      error: "Server Error",
    };

    res.status(500).json(response);
  }
});

const createGroup = asyncHandler(async (req, res) => {
  try {
    const { groupName, isPublic, isJoined, isPin, coverUrl, avatarUrl } =
      req.body;
    const userId = req.user;

    // Validation
    if (!groupName && !isPublic) {
      res
        .status(404)
        .json({ success: false, error: "Please fill in all fields!" });
    }

    // Check if the user has reached the maximum limit of groups (4 groups)
    const userGroupCount = await Group.countDocuments({ userId });
    console.log("userGroupCount", userGroupCount);
    if (userGroupCount >= 4) {
      return res.status(400).json({
        success: false,
        error: "You have reached the maximum limit of groups (4)!",
      });
    }

    // Check if coverUrl or avatarUrl are provided
    let coverFileData = coverUrl || null;
    let avatarFileData = avatarUrl || null;

    if (req.file) {
      // Save image to cloudinary
      // Save cover image to cloudinary
      const uploadedCover = await cloudinary.uploader.upload(
        req.files.cover[0].path,
        {
          folder: "Wina",
          resource_type: "image",
        }
      );

      coverFileData = uploadedCover.secure_url;

      // Save avatar image to cloudinary
      const uploadedAvatar = await cloudinary.uploader.upload(
        req.files.avatar[0].path,
        {
          folder: "Wina",
          resource_type: "image",
        }
      );

      avatarFileData = uploadedAvatar.secure_url;
    }

    // Create group
    const group = await Group.create({
      groupName,
      isPublic,
      isJoined,
      member: 1, // Assuming the creator is the first member
      coverUrl: coverFileData,
      postPerDay: 0,
      userId,
      friendsInGroup: [{ userId }], // Add the creator to the friendsInGroup
      isPin,
      avatarUrl: avatarFileData,
    });

    res.status(200).json({
      success: true,
      message: "Group created successfully!",
      data: group,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
});

const updateGroup = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user;
    const group = await Group.findOne({ userId, groupId: id });

    const { groupName, isPublic, isJoined, isPin, coverUrl, avatarUrl } =
      req.body;

    console.log("req.files", req.files);
    console.log("req.files.coverUrl", req.files.coverUrl);
    console.log("req.files.avatarUrl", req.files.avatarUrl);

    // Check if group exists
    if (!group) {
      res
        .status(404)
        .json({ success: false, error: "Sorry, you don't have any group!" });
      return;
    }

    // Validation
    if (!groupName && !isPublic) {
      res
        .status(404)
        .json({ success: false, error: "Please fill in all fields!" });
    }

    // Check if coverUrl or avatarUrl are provided
    let coverFileData = coverUrl || null;
    let avatarFileData = avatarUrl || null;

    // Handle cover image upload
    if (req.files && req.files.cover) {
      const uploadedCover = await cloudinary.uploader.upload(
        req.files.cover[0].path,
        {
          folder: "Wina",
          resource_type: "image",
        }
      );
      coverUrl = uploadedCover.secure_url;
    }

    // Handle avatar image upload
    if (req.files && req.files.avatar) {
      const uploadedAvatar = await cloudinary.uploader.upload(
        req.files.avatar.path,
        {
          folder: "Wina",
          resource_type: "image",
        }
      );
      avatarUrl = uploadedAvatar.secure_url;
    }

    // Update group
    const updatedGroup = await Group.findOneAndUpdate(
      { userId, groupId: id },
      {
        groupName,
        isPublic,
        isJoined,
        isPin,
        coverUrl: coverFileData,
        avatarUrl: avatarFileData,
      },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: "Group updated successfully!",
      data: updatedGroup,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
});

const deleteGroup = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const stoire = await Stoire.deleteOne({ userId: req.user, stoireId: id });

    // if group doesnt exist
    if (!stoire) {
      res.status(404);
      throw new Error("stoire not found");
    }

    res.status(200).json({ message: "stoire deleted." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});
// -----------Group Post Start Here----------
const getGroupPost = asyncHandler(async (req, res) => {});

// -----------Group Post Categories Start Here----------
const getGroupPostCategories = asyncHandler(async (req, res) => {});

module.exports = {
  getGroups,
  getGroup,
  createGroup,
  updateGroup,
  deleteGroup,
  getGroupPost,
  getGroupPostCategories,
};
