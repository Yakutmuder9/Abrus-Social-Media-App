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
  getStorie,
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
  getGroups,
  getGroup,
  createGroup,
  updateGroup,
  deleteGroup,
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
router.post("/post", verifyJWT, upload.single("file"), createPost);
router.get("/post/:id", verifyJWT, getPost);
router.get("/post", verifyJWT, getPosts);
router.patch("/post/:id", verifyJWT, upload.single("file"), updatePost);
router.delete("/post/:id", verifyJWT, deletePost);

// Stories Routes
router.get("/storie/:id", verifyJWT, getStorie);
router.post("/storie", verifyJWT, upload.single("file"), createStorie);
router.patch("/storie/:id", verifyJWT, upload.single("file"), updateStorie);
router.delete("/storie/:id", verifyJWT, deleteStorie);

// Friend Request and Recommended Friend Routes
router.get("/friend-request", verifyJWT, getFriendRequest);
router.get("/recommended-friends", verifyJWT, getRecommendedFriends);

// Pages and Page Posts Routes
router.get("/page", verifyJWT, getPage);
router.get("/page-posts", verifyJWT, getPagePosts);

// Groups, Group Posts and Group Categories Routes
router.get("/group", verifyJWT, getGroups);
router.get("/group/:id", verifyJWT, getGroup);
router.post("/group", verifyJWT, upload.single("file"), createGroup);
router.patch(
  "/group/:id",
  verifyJWT,
  upload.fields([
    { name: "coverUrl", maxCount: 4 },
    { name: "avatarUrl", maxCount: 4 },
  ]),
  updateGroup
);

router.post("/group/:id", verifyJWT, deleteGroup);
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
