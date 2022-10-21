const express = require("express");
const router = express.Router();
const  protect  = require("../middleware/auth");
const { upload } = require("../utils/fileUpload");
const {
    getUserData, 
    updateUserData,
    deleteUser
} = require('../controllers/private');
const {
    createPost,
    getPosts,
    getPost,
    updatePost,
    deletePost,
    fetchAllUsersPosts,
} = require('../controllers/posts');

router.route("/getuserdata").get(protect, getUserData);
router.route("/updateuserdata").patch(protect, upload.single("image"), updateUserData);
router.route("/deleteuser").delete(protect, deleteUser);


router.route("/fetchallposts").get(protect, fetchAllUsersPosts);

router.route("/post").post(protect, upload.single("image"), createPost);
router.route("/post/:id").patch(protect, upload.single("image"), updatePost);
router.route("/post").get(protect, getPosts);
router.route("/post/:id").get(protect, getPost);
router.route("/post/:id").delete(protect, deletePost);

module.exports = router;




