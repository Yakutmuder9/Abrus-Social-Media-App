const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const bgColorSchema = new mongoose.Schema(
  {
    bgColorId: {
      type: Number,
      unique: true,
    },
    group: String,
    isPureColor: Boolean,
    color: String,
    textColor: String,
  },
  {
    timestamps: true,
  }
);

userSchema.plugin(AutoIncrement, { inc_field: "bgColorId", start_seq: 100 });
module.exports = mongoose.model("BgColor", bgColorSchema);
