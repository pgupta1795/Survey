const options = require('./options');
const Constants = require('../../../../helper/Constants');

const questions = [
  {
    _id: {
      type: String,
    },
    open: { type: Boolean, default: false },
    text: String,
    image: { type: String, default: '' },
    options,
    type: { type: String, default: Constants.RADIO },
  },
];

module.exports = questions;
