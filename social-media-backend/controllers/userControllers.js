const Users = require("../models/userModel");
const {
  validateEmail,
  validationLength,
  validateUsername,
} = require("../helpers/validation");
const bycrypt = require("bcrypt");
const { jwtToken } = require("../helpers/token");

exports.newUser = async (req, res) => {
  try {
    const {
      fName,
      lName,
      username,
      email,
      password,
      bMonth,
      bDay,
      bYear,
      gender,
      verified,
    } = req.body;

    if (!validateEmail(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    const checkMail = await Users.findOne({ email });
    if (checkMail) {
      return res.status(400).json({ message: "Email already in use" });
    }

    if (!validationLength(fName, 3, 15)) {
      return res
        .status(400)
        .json({ message: "First name must be between 3 and 15 characters." });
    }
    if (!validationLength(lName, 3, 15)) {
      return res
        .status(400)
        .json({ message: "Last name must be between 3 and 15 characters." });
    }
    if (!validationLength(password, 6, 20)) {
      return res
        .status(400)
        .json({ message: "Password must be between 6 and 20 characters." });
    }

    // bycrypt password

    const crypted = await bycrypt.hash(password, 10);

    // validate username

    let tempUsername = fName + lName;
    let finalUsername = await validateUsername(tempUsername);

    const user = await new Users({
      fName,
      lName,
      username: finalUsername,
      email,
      password: crypted,
      bMonth,
      bDay,
      bYear,
      gender,
      verified,
    }).save();

    const emailToken = jwtToken({ id: user._id.toString() }, "30m");
    console.log(emailToken);

    res.send(user);
  } catch (error) {
    res.status(404).json({ message: "something went wrong" });
  }
};
