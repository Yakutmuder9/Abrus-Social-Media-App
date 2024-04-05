const asyncHandler = require("express-async-handler");

const getSearchRecent = asyncHandler(async (req, res) => {});
const getHistories = asyncHandler(async (req, res) => {});

module.exports = {
  getSearchRecent,
  getHistories,
};
