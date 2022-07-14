const router = require('express').Router();
const {
  test,
  sendForm,
  sendResetToken,
  sendReport,
} = require('../service/EmailService');

router.route('/test').get(test);
router.route('/sendResetToken/:email').get(sendResetToken);
router.route('/sendForm').post(sendForm);
router.route('/sendReport/:userId').post(sendReport);

module.exports = router;
