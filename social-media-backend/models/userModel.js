const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { ObjectId } = mongoose.Schema;

const UserModel = new Schema(
  {
    fName: {
      type: String,
      require: true,
      trim: true,
      text: true,
    },
    lName: {
      type: String,
      require: true,
      trim: true,
      text: true,
    },
    username: {
      type: String,
      require: true,
      trim: true,
      text: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
    },
    profilePicture: { type: String, default: "" },
    cover: { type: String, trim: true },
    bMonth: { type: Number, trim: true, require: true },
    bDay: { type: Number, trim: true, require: true },
    bYear: { type: Number, trim: true, require: true },
    gender: { type: String, require: true },
    verified: { type: Boolean, default: false },
    friends: [{ type: ObjectId, ref: "usermodel" }],
    followers: [{ type: ObjectId, ref: "usermodel" }],
    following: [{ type: ObjectId, ref: "usermodel" }],
    request: [{ type: ObjectId, ref: "usermodel" }],
    search: [
      {
        user: {
          type: ObjectId,
          ref: "usermodel",
          require: true,
          text: true,
        },
        createdAt: {
          type: Date,
          require: true,
        },
      },
    ],
    details: {
      bio: { type: String },
      otherName: { type: String },
      job: { type: String },
      workplace: { type: String },
      highSchool: { type: String },
      college: { type: String },
      currentCity: { type: String },
      hometown: { type: String },
      relationship: {
        type: String,
        enum: [
          "single",
          "married",
          "divorced",
          "in a relationship",
          "engaged",
          "it's complicated",
        ],
      },
      instagram: { type: String },
    },
    savedPost: [
      {
        post: { type: ObjectId, ref: "post" },
        savedAt: { type: Date, require: true },
      },
    ],
  },
  {
    timestamps: true,
  },
);
module.exports = mongoose.model("usermodel", UserModel);
