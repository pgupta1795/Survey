const router = require('express').Router();
const Constants = require('../helper/Constants');
const connection = require('./connection');
const UserRouter = require('../templates/User/router/UserRouter');
const FormRouter = require('../templates/Form/router/FormRouter');
const ImageRouter = require('../templates/Image/router/ImageRouter');
const ResponseRouter = require('../templates/Response/router/ResponseRouter');
const EmailRouter = require('../templates/email/router/EmailRouter');

router.get('/', (req, res) => {
  if (connection) {
    console.log(connection);
    res.send(Constants.ROUTER_OK);
  }
});

router.use('/user', UserRouter);
router.use('/form', FormRouter);
router.use('/image', ImageRouter);
router.use('/response', ResponseRouter);
router.use('/email', EmailRouter);

module.exports = router;
