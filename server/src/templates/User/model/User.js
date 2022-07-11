const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const SchemaConstants = require('../../../helper/SchemaConstants');

const UserSchema = new Schema(
  {
    name: String,
    password: String,
    email: String,
    admin: { type: Boolean, default: false },
    organization: { type: String },
    createdForms: [],
  },
  { timestamps: true }
);

UserSchema.plugin(mongoosePaginate);
const User = model(SchemaConstants.USER, UserSchema);
module.exports = User;
