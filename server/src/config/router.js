const router = require('express').Router();
const Constants = require('../helper/Constants');
// const authenticateToken = require('./middleware');
const connection = require('./connection');
const UserRouter = require('../templates/User/router/UserRouter');
const FormRouter = require('../templates/Form/router/FormRouter');
const ImageRouter = require('../templates/Image/router/ImageRouter');
const ResponseRouter = require('../templates/Response/router/ResponseRouter');

router.get('/', (req, res) => {
  if (connection) {
    console.log(connection);
    res.send(Constants.ROUTER_OK);
  }
});

router.use('/user', UserRouter);
// router.use(authenticateToken());
router.use('/form', FormRouter);
router.use('/image', ImageRouter);
router.use('/response', ResponseRouter);

module.exports = router;
