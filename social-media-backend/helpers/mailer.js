const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { OAuth2 } = google.auth;

const oauth_link = "https://developers.google.com/oauthplayground";
const { EMAIL, MAILING_ID, MAILING_SECRECT, MAILING_REFRESH_TOKEN } =
  process.env;

const auth = new OAuth2(
  MAILING_ID,
  MAILING_SECRECT,
  MAILING_REFRESH_TOKEN,
  oauth_link
);
exports.sendVerifiedEmail = (email, name, url) => {
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
    html: ` <div style=" text-align: center; border: 1px solid #f1f0f0; padding: 20px; background-color: #faf9fa; " > <h1 style="color: cadetblue; font-family: sans-serif"> Hello ${name}! Welcome to Our Service! </h1> <p style=" font-family: sans-serif; font-size: 18px; color: rgb(163, 109, 214); " > Please click the link below to verify your email address </p> <a href="${url}" style=" display: inline-block; padding: 10px 20px; background-color: cadetblue; color: #efe5f3; text-decoration: none; border-radius: 5px; font-family: sans-serif; margin-top: 20px; " onMouseOver="this.style.backgroundColor='#9acfe7'; this.style.color='#000000';" onMouseOut="this.style.backgroundColor='cadetblue'; this.style.color='#efe5f3';" >Verify Email</a > </div>`,
  };
  stmp.sendMail(mailOptions, (err, res) => {
    if (err) return err;
    return res;
  });
};
