const asyncHandler = require("express-async-handler");

const getPage = asyncHandler(async (req, res) => {});
const getPagePosts = asyncHandler(async (req, res) => {});

module.exports = {
  getPage,
  getPagePosts,
};
