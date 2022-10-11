const express = require("express");
const router = express.Router();
const { getPrivateRoute } = require("../controllers/private");
const { protect } = require("../middleware/auth");
const {
    createPost,
    fetchPosts,
    fetchPost,
    updatePost,
    deletePost,
  } = require('../controllers/posts');

router.route("/").get(protect, getPrivateRoute);
router.route("/post").post(protect, createPost);
router.route("/post").get(protect, fetchPost);
router.route("/post/:id").get(protect, fetchPosts);
router.route("/post/:id").put(protect, updatePost);
router.route("/post/:id").delete(protect, deletePost);

module.exports = router;




