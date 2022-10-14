const crypto = require("crypto");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please provide First name"],
    minLength: [3, "First name must be atleast 3 letter"],
  },
  lastName: {
    type: String,
    required: [true, "Please provide username"],
    minLength: [3, "Last name must be atleast 3 letter"],
  },
  email: {
    type: String,
    required: [true, "Please provide email address"],
    unique: [true, "Email has already been registered"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minLength: [6, "Password must be up to 6 characters"],
    select: false,
  },
  profile_pic: {
    type: String,
    required: [true, "Please add a photo"],
    default: "https://i.ibb.co/4pDNDk1/avatar.png",
  },
  dateOfBirth: {
    type: Date,
    require: true
  },
  hobbies: {
    type: String,
    maxLength: [250, "Bio must not be more than 250 characters"],
    default: "bio",
  },
  relationShip: String,
  featured: Boolean,
  status: Boolean,
  gender: {
    type: String,
    enum: ["Male", "Femme"]
  },
  friends_count: Number,
  education: String,
  location: String,
  friends: {
    firstName: String,
    lastName: String,
    email: String,
    image: {
      type: String,
      default: "https://i.ibb.co/4pDNDk1/avatar.png"
    },
    
  },
  education: String,
  noFriend: String,
},
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});


UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};


UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

UserSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hash token (private key) and save to database
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Set token expire date
  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000); // Ten Minutes

  return resetToken;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
