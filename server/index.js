require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const router = require('./src/config/router');
const Constants = require('./src/helper/Constants');

const app = express();

//middleware
app.use(express.static('public'));
app.use(
  logger(
    ':date[web] ---- :method :url :status :res[content-length] - :response-time ms'
  )
);
app.use(cors());
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());
app.use('/', router);

app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'), (err) => {
    if (err) res.status(500).send(err);
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(Constants.NODE_STARTED));
