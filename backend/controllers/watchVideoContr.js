const asyncHandler = require("express-async-handler");

const getWatchVideo = asyncHandler(async (req, res) => {});
const getWatchThread = asyncHandler(async (req, res) => {});
const getWatchSearchRecommended = asyncHandler(async (req, res) => {});

module.exports = {
  getWatchVideo,
  getWatchThread,
  getWatchSearchRecommended,
};
