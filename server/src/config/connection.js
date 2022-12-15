const mongoose = require('mongoose');
const Constants = require('../helper/Constants');
const startup = require('../data/CreateAdminUsers');

const env = process.env;
const host = env.MONGO_HOST;
const port = env.MONGO_PORT;
const user = env.MONGO_USER;
const pwd = env.MONGO_PASSWORD;
const db = env.MONGO_INITDB_DATABASE;

// mongodb://technia:technia@localhost:27017/
const url = `mongodb+srv://${user}:${pwd}@cluster0.p6vwwoz.mongodb.net/test`;
// url = env.DB_URL;

console.log({ url });

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(url, options).catch((err) => console.log(err));

const connection = mongoose.connection;
connection.on('open', () => {
  console.log(Constants.DB_STARTED);
  startup();
});
connection.on('error', (error) => console.log({ error }));

module.exports = connection;
