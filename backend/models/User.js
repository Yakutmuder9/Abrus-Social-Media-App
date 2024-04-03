const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      unique: true,
    },
    userFullName: {
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
    },
    myCoordinates: {
      longitude: Number,
      latitude: Number,
    },
    links: [
      {
        name: String,
        link: String,
      },
    ],
    dateOfBirth: {
      type: Date,
      require: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
    },
    friends: [
      {
        userId: Number,
        mutualFriends: Number,
        isRecent: Boolean,
      },
    ],
    watchList: [{ pageId: Number }],
    avatorUrl: { type: String, default: "https://i.ibb.co/4pDNDk1/avatar.png" },
    coverUrl: String,
    subName: String,
    introTxt: String,
    work_at: String,
    live_in: String,
    relationShip: String,
    learnAt: String,
    from: String,
    followers: Number,
    hobbies: {
      type: String,
      maxLength: [150, "Bio must not be more than 250 characters"]
    },
    roles: {
      type: [String],
      default: ["Admin"],
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Add the auto-incrementing ID field
userSchema.plugin(AutoIncrement, { inc_field: "userId", start_seq: 100 });

module.exports = mongoose.model("User", userSchema);
