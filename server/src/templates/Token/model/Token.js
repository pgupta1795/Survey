const { Schema, model } = require('mongoose');
const SchemaConstants = require('../../../helper/SchemaConstants');

const tokenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: SchemaConstants.USER,
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600, // this is the expiry time in seconds
  },
});

const Token = model(SchemaConstants.TOKEN, tokenSchema, SchemaConstants.TOKEN);
module.exports = Token;
