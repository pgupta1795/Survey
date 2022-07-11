const router = require('express').Router();
const {
  createForm,
  getForms,
  getFormById,
  deleteForm,
  editForm,
  getFormsByUser,
} = require('../service/FormService');

router.route('/create/:userId').post(createForm);
router.route('/forms').get(getForms);
router.route('/:formId').get(getFormById);
router.route('/deleteform/:formId/:userId').delete(deleteForm);
router.route('/editform').put(editForm);
router.route('/getuserforms/:userId').get(getFormsByUser);

module.exports = router;
