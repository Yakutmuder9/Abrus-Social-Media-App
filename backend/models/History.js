const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

// Define the searchRecents schema
const searchRecentsSchema = new mongoose.Schema({
  id: Number,
  type: { type: Number, default: 0 },
  keyword: String,
  userId: { type: Number, default: 0 },
  pageId: { type: Number, default: 0 },
  groupId: { type: Number, default: 0 },
});

// Define the history groups schema
const historySchema = new mongoose.Schema({
  id: Number,
  isResult: { type: Boolean, default: false },
  keyword: String,
});

userSchema.plugin(AutoIncrement, { inc_field: "historieId", start_seq: 100 });

// Create the searchRecents model
const SearchRecents = mongoose.model("SearchRecents", searchRecentsSchema);

// Create the history groups model
const History = mongoose.model("History", historySchema);

module.exports = { SearchRecents, History };
