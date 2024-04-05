const express = require("express");
const router = express.Router();
const {
  register,
  login,
  refresh,
  forgotPassword,
  resetPassword,
  logout,
  changePassword,
} = require("../controllers/authContr");
const loginLimiter = require("../middleware/loginLimiter");
const verifyJWT = require("../middleware/verifyJWT");

router.post("/register", register);
router.post("/login", loginLimiter, login);
router.get("/refresh", refresh);
router.post("/logout", logout);

router.patch("/changepassword",verifyJWT, changePassword);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resetToken", resetPassword);

module.exports = router;
