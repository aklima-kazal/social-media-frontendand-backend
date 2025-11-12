const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { OAuth2 } = google.auth;

const oauth_link = "https://developer.google.com/oauthplayground";
const { MAILING_ID, MAILING_SECRECT, MAILING_REFRESH_TOKEN, EMAIL } =
  process.env;

const auth = new OAuth2(
  MAILING_ID,
  MAILING_SECRECT,
  MAILING_REFRESH_TOKEN,
  oauth_link
);
exports.sendVerificationEmail = (name, email, url) => {
  auth.setCredentials({
    refresh_token: MAILING_REFRESH_TOKEN,
  });
  const accessToken = auth.getAccessToken();
  const stmp = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: EMAIL,
      clientId: MAILING_ID,
      clientSecret: MAILING_SECRECT,
      refreshToken: MAILING_REFRESH_TOKEN,
      accessToken,
    },
  });

  const mailOptions = {
    from: EMAIL,
    to: email,
    subject: "Verify your email for Social Media App",
    html: ``,
  };
  stmp.sendMail(mailOptions, (err, res) => {
    if (err) return err;
    return res;
  });
};
