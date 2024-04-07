const asyncHandler = require("express-async-handler");
const multer = require("multer");

// Multer configuration
// const storage = multer.memoryStorage();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads"); 
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// File size formatter function
const fileSizeFormatter = asyncHandler((bytes, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
});

const fileFilter = asyncHandler((req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Only JPEG, PNG, and JPG files are allowed!"), false);
  }
});

// Multer upload instance
const upload = multer({
  storage: storage,
  // fileFilter: fileFilter,
  // limits: { fileSize: 1024 * 1024 * 5 }, // Limit file size to 5MB
});

module.exports = { upload, fileSizeFormatter };
