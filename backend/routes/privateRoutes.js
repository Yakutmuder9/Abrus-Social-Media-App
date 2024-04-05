const express = require("express");
const router = express.Router();
const { upload } = require("../utils/fileUpload");
const verifyJWT = require("../middleware/verifyJWT");
const {
  createPost,
  getPost,
  getPosts,
  updatePost,
  deletePost,
  getStories,
  createStorie,
  updateStorie,
  deleteStorie,
} = require("../controllers/postContr");
const {
  getFriendRequest,
  getRecommendedFriends,
} = require("../controllers/friendRequestContr");
const { getPage, getPagePosts } = require("../controllers/pageContr");
const {
  getGroup,
  getGroupPost,
  getGroupPostCategories,
} = require("../controllers/groupContr");
const {
  getWatchVideo,
  getWatchThread,
  getWatchSearchRecommended,
} = require("../controllers/watchVideoContr");
const {
  getSearchRecent,
  getHistories,
} = require("../controllers/historyContr");
const { getBgColor } = require("../controllers/bgColorContr");
const { getEvents } = require("../controllers/eventContr");
const { getProducts } = require("../controllers/productContr");
const { getNotification } = require("../controllers/notificationContr");
const { getPhotos } = require("../controllers/photoContr");

// Post Routes
router.post("/create-post", verifyJWT,  createPost);
router.get("/get-post", verifyJWT, getPost);
router.get("/get-posts", verifyJWT, getPosts);
router.patch("/update-post", verifyJWT, updatePost);
router.delete("/delete-post", verifyJWT, upload.single("image"), deletePost);

// Stories Routes
router.get("/get-stories", verifyJWT, getStories);
router.post("/create-storie", verifyJWT, upload.single("image"), createStorie);
router.patch("/update-storie", verifyJWT, upload.single("image"), updateStorie);
router.delete("/delete-storie", verifyJWT, deleteStorie);

// Friend Request and Recommended Friend Routes
router.get("/friend-request", verifyJWT, getFriendRequest);
router.get("/recommended-friends", verifyJWT, getRecommendedFriends);

// Pages and Page Posts Routes
router.get("/page", verifyJWT, getPage);
router.get("/page-posts", verifyJWT, getPagePosts);

// Groups, Group Posts and Group Categories Routes
router.get("/group", verifyJWT, getGroup);
router.get("/group-post", verifyJWT, getGroupPost);
router.get("/group-post-categories", verifyJWT, getGroupPostCategories);

// Watch Video, Watch Threads and Watch Search Recomm Routes
router.get("/watch-video", verifyJWT, getWatchVideo);
router.get("/watch-thread", verifyJWT, getWatchThread);
router.get("/watch-search-recommended", verifyJWT, getWatchSearchRecommended);

// Search Recents and histories Routes
router.get("/search-recent", verifyJWT, getSearchRecent);
router.get("/histories", verifyJWT, getHistories);

// Bg Color Routes
router.get("/bg-color", verifyJWT, getBgColor);

// Photos Routes
router.get("/photos", verifyJWT, getPhotos);

// Notification Routes
router.get("/notification", verifyJWT, getNotification);

// products Routes
router.get("/products", verifyJWT, getProducts);

// Events Routes
router.get("/events", verifyJWT, getEvents);

module.exports = router;
