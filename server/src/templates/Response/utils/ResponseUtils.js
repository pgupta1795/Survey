const ResponseModel = require('../model/Response');

const getResponseByFormId = async (formId) => {
  return await ResponseModel.find({ formId });
};

const getIncompleteResponse = async (userId) => {
  return await ResponseModel.findOne({ userId, completed: false });
};

const updateIncompleteResponse = async (id, data) => {
  return await ResponseModel.updateOne(
    { _id: id },
    { $set: data },
    { new: true }
  );
};

const getResponseByFormIdAndOrganization = async (formId, organization) => {
  return await ResponseModel.find({ formId, organization, completed: true });
};

module.exports = {
  getResponseByFormId,
  getIncompleteResponse,
  updateIncompleteResponse,
  getResponseByFormIdAndOrganization,
};
