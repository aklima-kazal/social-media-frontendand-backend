const Users = require("../models/userModel");
const {
  validateEmail,
  validationLength,
  validateUsername,
} = require("../helpers/validation");
const bcrypt = require("bcrypt");
const { jwtToken } = require("../helpers/token");
const { sendVerifiedEmail } = require("../helpers/mailer");
const jwt = require("jsonwebtoken");
const Code = require("../models/Code");
const { generateCode } = require("../helpers/generateCode");

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

    const crypted = await bcrypt.hash(password, 10);

    // validate username

    let tempUsername = fName + lName;
    let finalUsername = await validateUsername(tempUsername);

    const user = await new Users({
      fName,
      lName,
      email,
      username: finalUsername,
      password: crypted,
      bMonth,
      bDay,
      bYear,
      gender,
      verified,
    }).save();

    const emailToken = jwtToken({ id: user._id.toString() }, "30m");

    const url = `${process.env.BASE_URL}/activate/${emailToken}`;

    sendVerifiedEmail(user.email, user.fName, url);

    const token = jwtToken({ id: user._id.toString() }, "7d");

    res.send({
      id: user._id,
      username: user.username,
      fName: user.fName,
      lName: user.lName,
      profilePicture: user.profilePicture,
      verified: user.verified,
      token: token,
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.verifiedUser = async (req, res) => {
  try {
    const verified = req.user.id;
    const { token } = req.body;
    const user = jwt.verify(token, process.env.SECRET_TOKEN);
    const check = await Users.findById(user.id);
    if (verified !== user.id) {
      return res.status(400).json({ message: "Unauthorized" });
    }

    if (check.verified === true) {
      return res
        .status(400)
        .json({ message: "This account is already verified." });
    } else {
      await Users.findByIdAndUpdate(user.id, { verified: true });
      res
        .status(200)
        .json({ message: "Account has been verified successfully." });
    }
  } catch (error) {
    res.status(401).json({ message: "" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Email does not exist." });
    }
    const check = await bcrypt.compare(password, user.password);
    if (!check) {
      return res
        .status(400)
        .json({ message: "Invalid credentials, please try again" });
    }
    const token = jwtToken({ id: user._id.toString() }, "7d");
    res.send({
      id: user._id,
      username: user.username,
      fName: user.fName,
      lName: user.lName,
      profilePicture: user.profilePicture,
      verified: user.verified,
      token: token,
      message: "User created successfully",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.reVerification = async (req, res) => {
  try {
    let id = req.user.id;
    const user = await Users.findById(id);
    if (user.verified === true) {
      return res
        .status(400)
        .json({ message: "This account is already verified." });
    }

    const emailToken = jwtToken({ id: user._id.toString() }, "30m");
    const url = `${process.env.BASE_URL}/activate/${emailToken}`;

    sendVerifiedEmail(user.email, user.fName, url);
    return res
      .status(200)
      .json({ message: "Verification link has been sent to your email." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.findUser = async (req, res) => {
  try {
    const { email } = req.body;
    const matchEmail = await Users.findOne({ email }).select("-password");
    if (!matchEmail) {
      return res.status(400).json({ message: "Email does not exist." });
    }
    res.status(200).json({
      message: "Email found successfully.",
      email: matchEmail.email,
      profilePicture: matchEmail.profilePicture,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.resetCode = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await Users.findOne({ email }).select("-password");
    await Code.findOneAndRemove({ user: user._id });
    const code = generateCode(5);
    const saveCode = await new Code({
      user: user._id,
      code,
    }).save();
    sendResetCode(user.email, user.fName, code);
    return res
      .status(200)
      .json({ message: "Reset code has been sent to your email." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.verifyCode = async (req, res) => {
  try {
    const { email, code } = req.body;
    const user = await Users.findOne({ email }).select("-password");
    const deCode = await Code.findOne({ user: user._id }); // check if code is valid
    if (deCode.code !== code) {
      return res.status(404).json({ message: "Invalid verification code." });
    }
    res.status(200).json({ message: "Verification code is valid." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.changePassword = async (req, res) => {
  try {
    const { email, Password } = req.body;
    const cryptedPassword = await bcrypt.hash(Password, 10);
    await Users.findOneAndUpdate({ email }, { password: cryptedPassword });

    return res
      .status(200)
      .json({ message: "Password has been changed successfully." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
