const router = require('express').Router();
const {
  sendForm,
  sendResetToken,
  sendReport,
} = require('../service/EmailService');

router.route('/sendResetToken/:email').get(sendResetToken);
router.route('/sendForm').post(sendForm);
router.route('/sendReport/:userId').post(sendReport);

module.exports = router;
