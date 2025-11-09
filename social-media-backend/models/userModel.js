const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { ObjectId } = mongoose.Schema;

const UserModel = new Schema(
  {
    fName: {
      type: String,
      required: true,
      trim: true,
      text: true,
    },
    lName: {
      type: String,
      required: true,
      trim: true,
      text: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      text: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    // profilePicture: { type: String, default: "" },
    // coverPhoto: { type: String, default: "" },
    // bMonth: { type: Number, trim: true, required: true },
    // bDay: { type: Number, trim: true, required: true },
    // bYear: { type: Number, trim: true, required: true },
    // gender: { type: String, trim: true, required: true },
    // verified: { type: Boolean, default: false },
    // friends: [{ type: ObjectId, ref: "usermodel" }],
    // followers: [{ type: ObjectId, ref: "usermodel" }],
    // following: [{ type: ObjectId, ref: "usermodel" }],
    // requests: [{ type: ObjectId, ref: "usermodel" }],
    // search: [
    //   {
    //     user: {
    //       type: ObjectId,
    //       ref: "usermodel",
    //       required: true,
    //       text: true,
    //     },
    //     createdAt: {
    //       type: Date,
    //       required: true,
    //     },
    //   },
    // ],
    // detaiils: {
    //   bio: { type: String },
    //   otherName: { type: String },
    //   job: { type: String },
    //   workplace: { type: String },
    //   highSchool: { type: String },
    //   college: { type: String },
    //   currentCity: { type: String },
    //   hometown: { type: String },
    //   relationship: {
    //     type: String,
    //     enum: [
    //       "single",
    //       "married",
    //       "divorced",
    //       "in a relationship",
    //       "engaged",
    //       "it's complicated",
    //     ],
    //   },
    //   instagram: { type: String },
    // },
    // savedPosts: [
    //   {
    //     post: { type: ObjectId, ref: "postmodel" },
    //     savedAt: { type: Date, required: true },
    //   },
    // ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("usermodel", UserModel);
