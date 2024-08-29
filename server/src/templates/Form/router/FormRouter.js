const router = require('express').Router();
const { authenticateToken } = require('../../../config/middleware');
const {
  createForm,
  getForms,
  getFormById,
  deleteForm,
  editForm,
  getFormsByUser,
  getTypes,
} = require('../service/FormService');

router.route('/types').get(authenticateToken, getTypes);
router.route('/create/:userId').post(authenticateToken, createForm);
router.route('/allforms').get(authenticateToken, getForms);
router.route('/:formId').get(authenticateToken, getFormById);
router
  .route('/deleteform/:formId/:userId')
  .delete(authenticateToken, deleteForm);
router.route('/editform').put(authenticateToken, editForm);
router.route('/getuserforms/:userId').get(authenticateToken, getFormsByUser);

module.exports = router;
