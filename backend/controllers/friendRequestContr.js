const asyncHandler = require("express-async-handler");

const getFriendRequest = asyncHandler(async (req, res) => {});
const getRecommendedFriends = asyncHandler(async (req, res) => {});

module.exports = {
  getFriendRequest,
  getRecommendedFriends,
};
