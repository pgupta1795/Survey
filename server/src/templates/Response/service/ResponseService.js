const ResponseModel = require('../model/Response');
const Constants = require('../../../helper/Constants');

const getResponse = async (req, res) => {
  try {
    const formId = req.params.formId;
    console.log('FORM : ', formId);
    const responses = await ResponseModel.find({ formId: formId });
    res.status(200).json(responses);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};

const allResponses = async (req, res) => {
  try {
    const result = await ResponseModel.find().lean();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};

const submitResponse = async ({ body }, res) => {
  try {
    const data = {
      formId: body.formId,
      userId: body.userId,
      response: body.response,
    };
    console.log('FORM : ', data.formId, 'USER : ', data.userId);

    if (data.response.length <= 0) {
      res.status(400).send(Constants.ERROR_SUBMIT_RESPONSE);
    }
    const docs = await new ResponseModel(data).save();
    console.log('CREATED RESPONSE OK !!');
    res.status(200).json(docs);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};

module.exports = { getResponse, allResponses, submitResponse };
