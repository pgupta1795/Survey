const mongoose = require('mongoose');
const Constants = require('../helper/Constants');
const startup = require('../data/CreateAdminUsers');

const env = process.env;
const url = env.DB_URL;

console.log({ url });

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(url, options).catch((err) => console.error(err));

const connection = mongoose.connection;
connection.on('open', () => {
  console.log(Constants.DB_STARTED);
  startup();
});
connection.on('error', (error) => console.error({ error }));

module.exports = connection;
