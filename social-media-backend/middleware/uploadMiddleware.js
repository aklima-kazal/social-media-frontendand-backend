const fs = require("fs");
module.exports = async (req, res, next) => {
  try {
    if (!req.files || Object.values(req.files).flat().length === 0) {
      return res.status(404).json({ message: "No files were uploaded." });
    }
    const files = Object.values(req.files).flat();
    files.forEach((files) => {
      if (
        files.mimetype !== "image/jpeg" &&
        files.mimetype !== "image/png" &&
        files.mimetype !== "image/gif"
      ) {
        removeFile(files.tempFilePath);
        return res.status(404).json({ message: "Unsupported file format." });
      }
      if (files.size > 1024 * 1024 * 5) {
        removeFile(files.tempFilePath);
        return res.status(404).json({ message: "File size is too large." });
      }
    });
    next();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const removeFile = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};
