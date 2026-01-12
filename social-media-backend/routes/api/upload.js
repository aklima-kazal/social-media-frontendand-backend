const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../../middleware/uploadMiddleware");
const { uploadImages } = require("../../controllers/upload");

router.post("/uploadimage", uploadMiddleware, uploadImages);

module.exports = router;
