const ResponseModel = require('../model/Response');

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

module.exports = { getIncompleteResponse, updateIncompleteResponse };
