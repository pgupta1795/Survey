const router = require('express').Router();
const UserService = require('../service/UserService');

router.route('/signup').post(UserService.signup);

router.route('/login').post(UserService.login);

router.route('/refresh/:userId').get(UserService.refresh);

module.exports = router;
