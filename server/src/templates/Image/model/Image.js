const { Schema, model } = require('mongoose');
const SchemaConstants = require('../../../helper/SchemaConstants');

const imageSchema = new Schema(
  {
    image: { type: String },
  },
  { timestamps: true }
);

const Image = model(SchemaConstants.IMAGE, imageSchema);
module.exports = Image;
