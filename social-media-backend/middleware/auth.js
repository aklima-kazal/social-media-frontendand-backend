const jwt = require("jsonwebtoken");

exports.authUser = async (req, res, next) => {
  try {
    let temporary = req.header("Authorization");
    let token = temporary ? temporary.slice(7, temporary.length) : "";

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
      if (err) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      req.user = user;
      next();
    });
  } catch (err) {
    console.log(err);

    res.status(401).json({ message: "Unauthorized" });
  }
};
