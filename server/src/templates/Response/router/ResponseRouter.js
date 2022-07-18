const router = require('express').Router();
const {
  allResponses,
  submitResponse,
  getResponse,
  getPendingResponse,
} = require('../service/ResponseService');

router.route('/getPendingResponse/:userId').get(getPendingResponse);
router.route('/submitResponse').post(submitResponse);
router.route('/responses').get(allResponses);
router.route('/getresponse/:formId').get(getResponse);

module.exports = router;
