const router = require('express').Router();
const Constants = require('../helper/Constants');
const connection = require('./connection');
const UserRouter = require('../templates/User/router/UserRouter');
const FormRouter = require('../templates/Form/router/FormRouter');
const ImageRouter = require('../templates/Image/router/ImageRouter');
const ResponseRouter = require('../templates/Response/router/ResponseRouter');
const EmailRouter = require('../templates/email/router/EmailRouter');

router.get('/api', (req, res) => {
  if (connection) {
    console.log(connection);
    res.send(Constants.ROUTER_OK);
  }
});

router.use('/api/user', UserRouter);
router.use('/api/form', FormRouter);
router.use('/api/image', ImageRouter);
router.use('/api/response', ResponseRouter);
router.use('/api/email', EmailRouter);

module.exports = router;
