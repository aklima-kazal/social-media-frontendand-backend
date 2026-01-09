const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const postModel = new Schema({
  type: {
    type: String,
    enum: ["profilePicture", "coverPhoto", null],
    default: null,
  },
  images: {
    type: Array,
  },
  text: {
    type: String,
  },
  background: {
    type: String,
  },
  user: {
    type: ObjectId,
    ref: "usermodel",
  },
  comments: [
    {
      comment: {
        type: String,
      },
      Image: {
        type: String,
      },
      commentBy: {
        type: ObjectId,
        ref: "usermodel",
      },
      commentAt: {
        type: Date,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("post", postModel);
