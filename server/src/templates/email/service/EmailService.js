const { sendEmail, sendUserEmail } = require('../utils/EmailUtils');
const {
  getEmail,
  validateHuman,
  findUserByEmail,
  getNameAndOrganization,
} = require('../../User/utils/UserUtils');
const Constants = require('../../../helper/Constants');
const { generateToken } = require('../../Token/utils/TokenUtils');
const tokenEmailView = require('../views/SendTokenView');
const formEmailView = require('../views/SendFormView');
const reportEmailView = require('../views/SendReportView');

const sendResetToken = async (req, res) => {
  try {
    const { email } = req.params;
    const human = await validateHuman(req.query?.token);
    if (!human) {
      res.status(400).json({ error: "Please, you're not fooling us, bot." });
      return;
    }

    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(400).send(Constants.ERROR_USER_EXISTS);
    }
    const code = await generateToken(user);
    if (!code) return res.status(500).send(Constants.ERROR_TOKEN_NOT_CREATED);
    const options = {
      to: email,
      subject: 'TECHNIA Survey',
      html: tokenEmailView(code),
    };
    const info = await sendEmail(options);
    res.status(200).json({ data: info.response });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const sendForm = async (req, res) => {
  try {
    const { userId, formUrl, To: to, Subject: subject, Message } = req.body;
    const user = await getNameAndOrganization(userId);
    if (!user) return res.status(400).send(Constants.ERROR_NO_EMAIL);

    const options = {
      from: process.env.EMAIL_FROM_USER,
      to,
      subject,
      html: formEmailView(user, Message, formUrl),
    };
    const info = await sendUserEmail(options);
    res.status(200).json(info.response);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const sendReport = async (req, res) => {
  try {
    const userId = req.params.userId;
    const pdfData = req.body.pdf;
    const email = await getEmail(userId);
    if (!email) return res.status(400).send(Constants.ERROR_NO_EMAIL);
    const user = await getNameAndOrganization(userId);
    const options = {
      to: email,
      subject: 'TECHNIA Survey',
      text: 'TECHNIA Survey',
      html: reportEmailView(user),
      attachments: [
        {
          filename: 'TECHNIA-PLM_MATURITY_REPORT.pdf',
          content: pdfData,
          contentType: 'application/pdf',
          encoding: 'base64',
        },
      ],
    };
    const info = await sendEmail(options);
    res.status(200).json(info.response);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

module.exports = { sendResetToken, sendForm, sendReport };
