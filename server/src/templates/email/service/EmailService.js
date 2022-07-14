const { sendEmail, sendUserEmail } = require('../utils/EmailUtils');
const { getEmail } = require('../../User/utils/UserUtils');
const Constants = require('../../../helper/Constants');
const { generateToken } = require('../../Token/utils/TokenUtils');
const tokenEmailView = require('../views/SendTokenView');
const { findUserByEmail } = require('../../User/utils/UserUtils');

const test = async (req, res) => {
  try {
    const options = {
      to: 'test-user@gmail.com',
      subject: 'TECHNIA : PLM Maturity Survey',
      text: 'That was easy!',
      html: '<b>Hey there! </b><br> This email is sent by PLM Maturity Survey<br/>',
    };
    const info = await sendEmail(options);
    res.status(200).json(info.response);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const sendResetToken = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await findUserByEmail(email);
    if (!user) {
      console.log(Constants.ERROR_USER_EXISTS);
      return res.status(400).send(Constants.ERROR_USER_EXISTS);
    }
    const code = await generateToken(user);
    if (!code) return res.status(500).send(Constants.ERROR_TOKEN_NOT_CREATED);
    const options = {
      to: email,
      subject: 'TECHNIA : PLM Maturity Survey',
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
    const { userId, formUrl, to, subject, body } = req.body;
    const email = await getEmail(userId);
    if (!email) return res.status(400).send(Constants.ERROR_NO_EMAIL);

    const href = `<a href=${formUrl}>FILL OUT FORM</a>`;
    const options = {
      from: email,
      to,
      subject,
      html: `<b>Hello, </b><br>${body}<br/><br>${href}<br/>`,
    };
    const info = await sendUserEmail(options);
    res.status(200).json(info.response);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

// TODO
const sendReport = async (req, res) => {
  try {
    const userId = req.params.userId;
    // const pdf = req.body.pdf
    const email = await getEmail(userId);
    const options = {
      to: email,
      subject: 'TECHNIA : PLM Maturity Survey',
      html: '<b>Hey there! </b><br> Please find attached email report<br/>',
    };
    const info = await sendEmail(options);
    res.status(200).json(info.response);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

module.exports = { test, sendResetToken, sendForm, sendReport };
