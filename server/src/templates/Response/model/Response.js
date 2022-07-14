const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const response = require('../model/schema/response');
const SchemaConstants = require('../../../helper/SchemaConstants');

const ResponseSchema = new Schema(
  {
    formId: {
      type: String,
      ref: SchemaConstants.FORM,
    },
    userId: {
      type: String,
    },
    response,
  },
  { timestamps: true }
);

ResponseSchema.plugin(mongoosePaginate);
const Response = model(
  SchemaConstants.RESPONSE,
  ResponseSchema,
  SchemaConstants.RESPONSE
);
module.exports = Response;
