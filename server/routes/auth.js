const express = require("express");
const router = express.Router();
// Controllers
const {
  register,
  login,
  loginStatus,
  forgotPassword,
  resetPassword,
  logout,
  changePassword,
} = require("../controllers/auth");
const  protect  = require("../middleware/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/loggedin", loginStatus);
router.get("/logout", logout);

router.patch("/changepassword", protect, changePassword);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resetToken", resetPassword);

module.exports = router;
