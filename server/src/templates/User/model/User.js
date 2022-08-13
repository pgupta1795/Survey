const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const SchemaConstants = require('../../../helper/SchemaConstants');

const UserSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: String,
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    admin: { type: Boolean, default: false },
    organization: { type: String },
    createdForms: [],
    image: { type: String, default: '' },
  },
  { timestamps: true }
);

UserSchema.plugin(mongoosePaginate);
const User = model(SchemaConstants.USER, UserSchema, SchemaConstants.USER);
module.exports = User;
