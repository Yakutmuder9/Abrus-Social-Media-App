const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendEmail");
const { isValidEmail, isValidPhoneNumber } = require("../utils/validations");

// Register user
const register = asyncHandler(async (req, res) => {
  const { userFullName, email, password, dateOfBirth, gender } = req.body;

  let newUser;

  // Determine if the input is an email or phone number
  if (isValidEmail(email)) {
    // Valid email format
    newUser = new User({
      email: email,
      password: password,
    });
  } else if (isValidPhoneNumber(email)) {
    // Valid phone number format
    newUser = new User({
      phone: email,
      password: password,
    });
  } else {
    return res
      .status(400)
      .json({ message: "Invalid email or phone number format" });
  }

  // Check if user email already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("Email has already been registered");
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const user = await User.create({
    userFullName,
    email,
    password: hashedPassword, // Store hashed password
    dateOfBirth,
    gender,
  });

  //   Generate Token
  const token = jwt.sign(
    { userId: user.userId },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "1d",
    }
  );

  // Send HTTP-only cookie
  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), // 1 day
    secure: true,
  });

  if (user) {
    const { userId, userFullName, email, gender, dateOfBirth } = user;
    res.status(201).json({
      userId,
      userFullName,
      email,
      gender,
      dateOfBirth,
      token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// User Login
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  const foundUser = await User.findOne({ email }).exec();

  if (!foundUser || !foundUser.active) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const match = await bcrypt.compare(password, foundUser.password);

  if (!match) return res.status(401).json({ message: "Unauthorized" });

  const accessToken = jwt.sign(
    {
      UserInfo: {
        userId: foundUser.userId,
        active: foundUser.active,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" }
  );

  const refreshToken = jwt.sign(
    { userId: foundUser.userId },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "7d",
    }
  );

  // Create secure cookie with refresh token
  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "None",
    maxAge: 60 * 60 * 1000,
    // maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  // Send accessToken containing email and roles
  res.json({ accessToken });
});

// Refresh Token
const refresh = asyncHandler((req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) return res.status(401).json({ message: "Unauthorized" });

  const refreshToken = cookies.jwt;

  const deco = jwt.decode(refreshToken);

  console.log("Received Refresh Token:", refreshToken);
  console.log("deco:", deco);

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    async (err, decoded) => {
      console.log("Decoded Token Payload:", decoded);

      if (err) {
        console.error("JWT Verification Error:", err);
        return res.status(403).json({ message: "Forbidden" });
      }

      const foundUser = await User.findOne({
        userId: decoded.userId,
      }).exec();

      console.log("Found User:", foundUser);

      if (!foundUser) return res.status(401).json({ message: "Unauthorized" });

      const accessToken = jwt.sign(
        {
          UserInfo: {
            userId: foundUser.userId,
            active: foundUser.active,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
      );
      res.json({ accessToken });
    }
  );
});

// Forgot Password route handler
const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User does not exist" });
  }

  // Generate a reset token with user ID and expiry time
  const resetToken = jwt.sign(
    { userId: user._id, expireTime: Date.now() + 30 * 60 * 1000 }, // Expire token after 30 minutes
    process.env.ACCESS_TOKEN_SECRET
  );

  console.log("resetToken", resetToken);

  // Save reset token to the user document
  user.resetPasswordToken = resetToken;
  user.resetPasswordExpire = Date.now() + 30 * 60 * 1000; // 30 minutes expiry
  await user.save();

  // Construct the reset URL
  const resetUrl = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;

  // Send the reset email
  const subject = "Password Reset Request";
  const message = `
    <p>You have requested a password reset.</p>
    <p>Please click the following link to reset your password:</p>
    <a href="${resetUrl}" target="_blank"><button>Reset your passowrd</button></a>
    <p>If you did not request this, please ignore this email.</p>
  `;

  try {
    // Send the email using your email sending method
    await sendEmail({
      to: user.email,
      subject,
      html: message,
      senderName: "Yakut",
      senderEmail: "yakutmuder@example.com",
    });
    res.status(200).json({ message: "Reset email sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Email could not be sent" });
  }
};

// Reset Password route handler
const resetPassword = async (req, res) => {
  const { resetToken } = req.params;
  const { newPassword } = req.body;

  try {
    // Verify and decode the reset token
    const decodedToken = jwt.verify(
      resetToken,
      process.env.ACCESS_TOKEN_SECRET
    );
    const { userId, expireTime } = decodedToken;

    // Check if the token has expired
    if (Date.now() > expireTime) {
      return res.status(400).json({ message: "Reset token has expired" });
    }

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Set new password and clear reset token fields
    user.password = hashedPassword; // Update password using your preferred method
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ message: "Password reset failed" });
  }
};

// const resetPassword = async (req, res) => {
//   const { resetToken } = req.params;
//   const { newPassword } = req.body;

//   // Hash the reset token to compare with the stored hashed token
//   const hashedToken = crypto.createHash("sha256").update(resetToken).digest("hex");

//   // Find the user with the matching reset token and not expired
//   const user = await User.findOne({
//     resetPasswordToken: hashedToken,
//     resetPasswordExpire: { $gt: Date.now() },
//   });

//   if (!user) {
//     return res.status(400).json({ message: "Invalid or expired reset token" });
//   }

//   // Set new password and remove reset token fields
//   user.password = await bcrypt.hash(newPassword, 10);
//   user.resetPasswordToken = undefined;
//   user.resetPasswordExpire = undefined;
//   await user.save();

//   res.status(200).json({ message: "Password reset successful" });
// };

// Logout User
const logout = asyncHandler(async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.json({ message: "Cookie not found" }); //No content

  // Set cookie options for clearing the cookie
  const cookieOptions = {
    httpOnly: true,
    sameSite: "None",
    secure: true,
    expires: new Date(0), // Set expiration
    path: "/", // Specify the path w
    domain: process.env.COOKIE_DOMAIN,
  };

  res.clearCookie("jwt", cookieOptions);
  res.json({ message: "Cookie cleared" });
});

// Change Password
const changePassword = asyncHandler(async (req, res) => {
  const user = await User.findOne({ userId: req.user }).select("+password");

  const { oldPassword, newPassword } = req.body;

  if (!user) {
    res.status(400);
    throw new Error("User not found, please signup");
  }
  //Validate
  if (!oldPassword || !newPassword) {
    res.status(400);
    throw new Error("Please add old and new password");
  }

  // check if old password matches password in DB
  const passwordIsCorrect = await bcrypt.compare(oldPassword, user.password);

  if (!passwordIsCorrect)
    return res
      .status(401)
      .json({ message: "Unauthorized: Old Password is not correct!" });

  // Hash the password
  const hashedNewPassword = await bcrypt.hash(newPassword, 10);

  // Save new password
  if (user && passwordIsCorrect) {
    user.password = hashedNewPassword;
    await user.save();
    res.status(200).send("Password change successful");
  } else {
    res.status(400);
    throw new Error("Old password is incorrect");
  }
});

module.exports = {
  register,
  login,
  forgotPassword,
  resetPassword,
  logout,
  refresh,
  changePassword,
};
