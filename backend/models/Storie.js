const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const storieSchema = new mongoose.Schema(
  {
    storieId: {
      type: Number,
      unique: true,
    },
    userId: {
      type: Number,
      unique: true,
    },
    image: [
      {
        storieImgId: Number,
        url: String,
        viewed: Boolean,
        createdAt: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.plugin(AutoIncrement, { inc_field: "storieId", start_seq: 100 });
module.exports = mongoose.model("Storie", storieSchema);
