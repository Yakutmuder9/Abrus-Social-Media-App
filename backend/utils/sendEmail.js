require("dotenv").config();
const SibApiV3Sdk = require("sib-api-v3-sdk");

// Initialize Sendinblue API client
const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

// Initialize Transactional Email API instance
const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

// Function to send an email using Sendinblue API
const sendEmail = async ({ to, subject, html, senderName, senderEmail }) => {
  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
  sendSmtpEmail.sender = { email: senderEmail, name: senderName };
  sendSmtpEmail.to = [{ email: to }];
  sendSmtpEmail.subject = subject;
  sendSmtpEmail.htmlContent = html;

  try {
    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log("Email sent successfully:", response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Email could not be sent");
  }
};

module.exports = sendEmail;

// // require("dotenv").config({ path: "./config.env" });
// // require('crypto').randomBytes(35).toString("hex")
// const nodemailer = require("nodemailer");

// const sendEmail = (options) => {
//   const transporter = nodemailer.createTransport({
//     service: process.env.EMAIL_SERVICE,
//     auth: {
//       user: process.env.EMAIL_USERNAME,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//     tls: {
//       rejectUnauthorized: false,
//     },
//   });

//   const mailOptions = {
//     from: process.env.EMAIL_FROM,
//     to: options.to,
//     subject: options.subject,
//     html: options.text,
//   };

//   transporter.sendMail(mailOptions, function (err, info) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(info);
//     }
//   });
// };

// module.exports = sendEmail;

// const SibApiV3Sdk = require("sendinblue-api");

// const sendEmail = async (options) => {
//   const defaultClient = SibApiV3Sdk.ApiClient.instance;
//   const apiKey = defaultClient.authentications["api-key"];
//   apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

//   const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

//   const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
//   sendSmtpEmail.subject = options.subject;
//   sendSmtpEmail.htmlContent = options.html;
//   sendSmtpEmail.sender = {
//     name: options.senderName,
//     email: options.senderEmail,
//   };
//   sendSmtpEmail.to = [{ email: options.to }];

//   try {
//     const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
//     console.log("Email sent:", response);
//     return response;
//   } catch (error) {
//     console.error("Error sending email:", error);
//     throw new Error("Failed to send email");
//   }
// };

// module.exports = sendEmail;
