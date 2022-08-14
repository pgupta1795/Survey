const router = require('express').Router();
const { authenticateToken } = require('../../../config/middleware');
const {
  createForm,
  getForms,
  getFormById,
  deleteForm,
  editForm,
  getFormsByUser,
} = require('../service/FormService');

router.route('/create/:userId').post(authenticateToken, createForm);
router.route('/allforms/:type').get(authenticateToken, getForms);
router.route('/:formId').get(authenticateToken, getFormById);
router
  .route('/deleteform/:formId/:userId')
  .delete(authenticateToken, deleteForm);
router.route('/editform').put(authenticateToken, editForm);
router.route('/getuserforms/:userId').get(authenticateToken, getFormsByUser);

module.exports = router;
