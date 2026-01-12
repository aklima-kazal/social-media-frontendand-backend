exports.uploadImages = async (req, res) => {
  try {
    res.json("Image uploaded successfully");
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
