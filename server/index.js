require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./src/config/router');
const Constants = require('./src/helper/Constants');

const app = express();

//middleware
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());
app.use('/', router);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(Constants.NODE_STARTED));
