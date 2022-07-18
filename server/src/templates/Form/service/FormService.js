const { ObjectId } = require('mongodb');
const FormModel = require('../model/Form');
const UserUtils = require('../../User/utils/UserUtils');
const Constants = require('../../../helper/Constants');
const User = require('../../User/model/User');

const errorCallback = (err, docs) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Updated : ', docs);
  }
};

const getForms = async (req, res) => {
  try {
    const formType = req.params.type;
    const result = await FormModel.find({
      type: formType,
    }).lean();
    res.send(result);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
};

/**
 * @param {body should contain userId of user creating the form, name of form, description of form} param0
 * @param {*} res
 */
const createForm = async (req, res) => {
  try {
    const userId = req.params.userId;
    const formData = req.body;
    console.log('FormData : ', formData);
    const form = await new FormModel(formData).save();
    await UserUtils.addForm(userId, form._id);
    console.log(`Form id ${form._id} added to user ${userId}`);
    res.status(200).json(form);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const deleteForm = async (req, res) => {
  try {
    const { formId, userId } = req.params;
    const form = await FormModel.findOne({
      _id: formId,
    }).populate('createdBy');

    const formUserId = form?.createdBy?._id?.toString();

    if (form == null)
      return res.status(404).send(Constants.ERROR_FORM_NOT_FOUND);
    if (formUserId != userId)
      return res.status(401).send(Constants.ERROR_FORM_AUTH_ERROR);

    await form.remove();
    console.log(`Form deleted ${formId}`);

    const updatedUser = await User.updateOne(
      { createdForms: formId },
      { $pull: { createdForms: formId } }
    );
    console.log(`User Updated ${userId}`);
    res.status(200).send(Constants.FORM_DELETED);
  } catch (error) {
    console.error(error);
    return res.send(error);
  }
};

/**
 * @param {Receives formId, name, description, questions as 4 body params} param0
 * @param {response} res
 */
const editForm = async ({ body }, res) => {
  try {
    const { formId, ...data } = body;
    console.log(`form ${formId} data is received`);

    const newFormData = await FormModel.findByIdAndUpdate(
      formId,
      { $set: data },
      {
        new: true,
        upsert: true,
      },
      errorCallback
    )
      .clone()
      .exec();
    console.log(`Form ${formId} saved successfully`);
    res.status(200).json(newFormData);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const getFormsByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log('User ', userId);
    const user = await UserUtils.findUserById(userId);
    if (user == null) return res.status(404).send(Constants.ERROR_NO_USER);
    FormModel.find()
      .where(Constants.ID)
      .in(user.createdForms)
      .exec((err, records) => {
        if (err) return res.status(500).send(err);
        console.log(records);
        res.status(200).json(records);
      });
  } catch (error) {
    console.eror(error);
    res.status(500).send(error);
  }
};

const getFormById = async (req, res) => {
  try {
    const formId = req.params.formId;
    const form = await FormModel.findOne({ _id: formId });
    if (form == null) return res.status(404).send(Constants.ERROR_NO_FORM);
    console.log(`Form Fetched : ${formId}`);
    res.status(200).json(form);
  } catch (error) {
    console.eror(error);
    res.status(500).send(error);
  }
};

module.exports = {
  createForm,
  editForm,
  deleteForm,
  getForms,
  getFormsByUser,
  getFormById,
};
