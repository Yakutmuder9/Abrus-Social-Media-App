const asyncHandler = require("express-async-handler");

const getGroup = asyncHandler(async (req, res) => {});
const getGroupPost = asyncHandler(async (req, res) => {});
const getGroupPostCategories = asyncHandler(async (req, res) => {});

module.exports = {
  getGroup,
  getGroupPost,
  getGroupPostCategories,
};
