const express = require("express");
const router = express.Router();
const {
  //   register,
  login,
  refresh,
  //   forgotPassword,
  //   resetPassword,
  logout,
  //   changePassword,
} = require("../controllers/authController");
const loginLimiter = require("../middleware/loginLimiter");

// router.post("/register", register);
router.post("/login", login);
router.get("/refresh", refresh);
router.post("/logout", logout);

// router.patch("/changepassword", changePassword);
// router.post("/forgotpassword", forgotPassword);
// router.put("/resetpassword/:resetToken", resetPassword);

module.exports = router;
