const express = require("express");
const router = express.Router();
const { createPost } = require("../../controllers/postControllers");

router.post("/createpost", createPost);

module.exports = router;
