const ResponseModel = require('../model/Response');
const Constants = require('../../../helper/Constants');
const {
  getResponseByFormId,
  getIncompleteResponse,
  updateIncompleteResponse,
  getResponseByFormIdAndOrganization,
} = require('../utils/ResponseUtils');

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

const getResponsesByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const result = await ResponseModel.find({ userId }).lean();
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
    const { _id, ...rest } = req.body;
    const { formId, userId, sections } = rest;
    if (sections.length <= 0)
      return res.status(400).send(Constants.ERROR_SUBMIT_RESPONSE);

    const obj = _id
      ? {
          formId,
          userId,
          _id,
        }
      : {
          formId,
          userId,
        };

    const incompleteResponse = await getIncompleteResponse({ ...obj });
    if (!incompleteResponse || incompleteResponse.length === 0) {
      const docs = await new ResponseModel(req.body).save();
      return res.status(200).json(docs);
    }
    const modified = await updateIncompleteResponse(
      incompleteResponse[0]._id,
      rest
    );
    console.log(modified);
    return res.status(200).json(modified);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const getPendingResponse = async (req, res) => {
  try {
    const userId = req.params.userId;
    const result = await getIncompleteResponse({ userId });
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const getResponseByCompany = async (req, res) => {
  try {
    const { formId } = req.params;
    const { organization } = req.query;
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
  getResponsesByUser,
  submitResponse,
  getPendingResponse,
  getResponseByCompany,
};
