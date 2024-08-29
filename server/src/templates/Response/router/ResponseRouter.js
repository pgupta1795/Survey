const router = require('express').Router();
const { authenticateToken } = require('../../../config/middleware');
const {
  getResponsesByUser,
  submitResponse,
  getResponse,
  getPendingResponse,
  getResponseByCompany,
} = require('../service/ResponseService');

router.route('/pendingResponse/:userId').get(getPendingResponse);
router.route('/submitResponse').post(submitResponse);
router.route('/responses/:userId').get(getResponsesByUser);
router.route('/response/:formId').get(getResponse);
router
  .route('/responseByCompany/:formId')
  .get(authenticateToken, getResponseByCompany);

module.exports = router;
