const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ResetCode = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  user: {
    type: ObjectId,
    ref: "usermodel",
    required: true,
  },
});

module.exports = mongoose.model("Code", ResetCode);
