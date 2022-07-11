const router = require('express').Router();
const {
  allResponses,
  submitResponse,
  getResponse,
} = require('../service/ResponseService');

router.route('/addresponse').post(submitResponse);
router.route('/responses').get(allResponses);
router.route('/getresponse/:formId').get(getResponse);

module.exports = router;
