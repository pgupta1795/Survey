const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const SchemaConstants = require('../../../helper/SchemaConstants');

const ResponseSchema = new Schema(
  {
    formId: {
      type: String,
      ref: SchemaConstants.FORM,
    },
    completed: { type: Boolean, default: false },
    userId: {
      type: String,
    },
    organization: { type: String },
    sections: [
      {
        _id: {
          type: String,
        },
        response: [
          {
            questionId: String,
            options: [{ optionId: String, optionText: String }],
          },
        ],
      },
    ],
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
