require("dotenv").config();
const SibApiV3Sdk = require("sib-api-v3-sdk");

const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
sendSmtpEmail.sender = { email: "yakutmuder9@gmail.com", name: "Yakut" };
sendSmtpEmail.to = [{ email: "yakutahmedin@gmail.com", name: "Muder" }];
sendSmtpEmail.subject = "Subject of the email";
sendSmtpEmail.textContent = "Hello is the plain text content of the email.";
sendSmtpEmail.htmlContent = "<p>This is the HTML content of the email.</p>";

apiInstance.sendTransacEmail(sendSmtpEmail).then(
  function (data) {
    console.log("Email sent successfully:", data);
  },
  function (error) {
    console.error("Error sending email:", error);
  }
);
