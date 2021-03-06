const mongoose = require('mongoose');
const Constants = require('../helper/Constants');
const startup = require('../data/CreateAdminUsers');

const url = process.env.DB_URL;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(url, options).catch((err) => console.log(err));

const connection = mongoose.connection;
connection.on('open', () => {
  console.log(connection);
  console.log(Constants.DB_STARTED);
  startup();
});
connection.on('error', (err) => console.log(err));

module.exports = connection;
