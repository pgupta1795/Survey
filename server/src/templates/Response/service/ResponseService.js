const ResponseModel = require('../model/Response');
const Constants = require('../../../helper/Constants');
const {
  getResponseByFormId,
  getIncompleteResponse,
  updateIncompleteResponse,
  getResponseByFormIdAndOrganization,
} = require('../utils/ResponseUtils');
const { getOrganization } = require('../../User/utils/UserUtils');

const getResponse = async (req, res) => {
  try {
    const formId = req.params.formId;
    console.log('FORM : ', formId);
    const responses = await getResponseByFormId(formId);
    res.status(200).json(responses);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const allResponses = async (req, res) => {
  try {
    const result = await ResponseModel.find().lean();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

/**
 * find incomplete (complete==false) responses w.r.t user = userId
 * And add sections Data to it
 *
 * @param {request} req
 * @param {response} res
 * @returns
 */
const submitResponse = async (req, res) => {
  try {
    const { userId, sections } = req.body;
    if (sections.length <= 0)
      return res.status(400).send(Constants.ERROR_SUBMIT_RESPONSE);

    const incompleteResponse = await getIncompleteResponse(userId);
    if (!incompleteResponse) {
      const docs = await new ResponseModel(req.body).save();
      console.log('SUBMITTED RESPONSE OK !!');
      return res.status(200).json(docs);
    }
    const modified = await updateIncompleteResponse(
      incompleteResponse._id,
      req.body
    );
    console.log(modified);
    console.log('SUBMITTED RESPONSE OK !!');
    return res.status(200).json(modified);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const getPendingResponse = async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log('USER : ', userId);
    const result = await getIncompleteResponse(userId);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const getResponseByCompany = async (req, res) => {
  try {
    const { formId, userId } = req.params;
    console.log(`Getting Responses for user ${userId} for form ${formId}`);
    const organization = await getOrganization(userId);
    const result = await getResponseByFormIdAndOrganization(
      formId,
      organization
    );
    console.log(`Responses fetched based on Company ${organization}`);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

module.exports = {
  getResponse,
  allResponses,
  submitResponse,
  getPendingResponse,
  getResponseByCompany,
};
