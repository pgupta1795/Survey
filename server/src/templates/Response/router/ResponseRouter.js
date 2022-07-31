const router = require('express').Router();
const { authenticateToken } = require('../../../config/middleware');
const {
  allResponses,
  submitResponse,
  getResponse,
  getPendingResponse,
  getResponseByCompany,
} = require('../service/ResponseService');

router.route('/getPendingResponse/:userId').get(getPendingResponse);
router.route('/submitResponse').post(submitResponse);
router.route('/responses').get(allResponses);
router.route('/getresponse/:formId').get(getResponse);
router
  .route('/getResponseByCompany/:formId/:userId')
  .get(authenticateToken, getResponseByCompany);

module.exports = router;
