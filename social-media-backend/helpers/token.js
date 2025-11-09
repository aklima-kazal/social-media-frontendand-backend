const jwt = require("jsonwebtoken");

exports.jwtToken = (user, expiredIn) => {
  return jwt.sign(user, process.env.SECRET_TOKEN, { expiresIn: expiredIn });
};
