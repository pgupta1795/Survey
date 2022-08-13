const router = require('express').Router();
const { authenticateToken } = require('../../../config/middleware');
const UserService = require('../service/UserService');

router
  .route('/organizations')
  .get(authenticateToken, UserService.getOrganizations);

router.route('/signup').post(UserService.signup);

router.route('/login').post(UserService.login);

router.route('/resetPassword').post(UserService.resetPassword);

router.route('/refresh/:userId').get(UserService.refresh);

router.route('/updateDetails').post(UserService.updateDetails);

module.exports = router;
