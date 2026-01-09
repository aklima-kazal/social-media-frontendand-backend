const express = require("express");
const router = express.Router();
const auth = require("./auth.js");
const allPost = require("./post.js");

router.use("/auth", auth);
router.use("/posts", allPost);

module.exports = router;
