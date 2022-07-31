const transporter = require('../../../config/email');

const FROM = process.env.EMAIL_FROM_USER;

const sendEmail = async (options) => {
  try {
    const info = await transporter.sendMail({
      from: FROM,
      ...options,
    });
    console.log('Message sent: %s', info.messageId);
    return info;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const sendUserEmail = async (options) => {
  try {
    const info = await transporter.sendMail({
      ...options,
    });
    console.log('Message sent: %s', info.messageId);
    return info;
  } catch (error) {
    throw error;
  }
};

module.exports = { sendEmail, sendUserEmail };
