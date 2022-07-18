const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const questions = require('../model/schema/questions');
const SchemaConstants = require('../../../helper/SchemaConstants');
const Constants = require('../../../helper/Constants');

const FormSchema = new Schema(
  {
    _id: {
      type: String,
    },
    name: String,
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: SchemaConstants.USER,
    },
    sections: [
      {
        _id: {
          type: String,
        },
        name: String,
        description: {
          type: String,
          default: Constants.EMPTY_STRING,
        },
        questions,
      },
    ],
    stared: { type: Boolean, default: false },
    type: { type: String, default: Constants.ANONYMOUS },
  },
  { timestamps: true }
);

FormSchema.plugin(mongoosePaginate);
const Form = model(SchemaConstants.FORM, FormSchema, SchemaConstants.FORM);
module.exports = Form;
