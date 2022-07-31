const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('../model/User');
const Constants = require('../../../helper/Constants');
const { hashedPassword, compareHashes } = require('../../../helper/Common');

const findUserById = async (userId) => {
  return await UserModel.findOne({ _id: userId }).lean();
};

const findUserByName = async (name) => {
  return await UserModel.findOne({ name }).lean();
};

const findUserByEmail = async (email) => {
  return await UserModel.findOne({ email }).lean();
};

const createAdminUser = async (name, password, email, organization) => {
  const hash = await hashedPassword(password);
  const user = await new UserModel({
    name,
    email,
    organization,
    password: hash,
    admin: true,
  });
  user.save();
  console.log('USER CREATED : ');
  console.log(user);
  return user;
};

const createUser = async (name, email, password, organization) => {
  const hash = await hashedPassword(password);
  const user = await new UserModel({
    name,
    email,
    organization,
    password: hash,
  }).save();
  console.log('USER CREATED : ');
  console.log(user);
  return user;
};

const findUser = async (email, password) => {
  let user = await findUserByEmail(email);
  if (!user) return null;
  const compare = await compareHashes(password, user.password);
  if (!compare) return null;
  return user;
};

const addForm = async (user, formId) => {
  const result = await UserModel.updateOne(
    { _id: user },
    { $push: { createdForms: formId } }
  );
  return result;
};

const getAccessToken = (user) =>
  jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

const getEmail = async (userId) => {
  try {
    const user = await findUserById(userId);
    if (!user || user == null || !user?.email) throw Constants.ERROR_NO_USER;
    return user.email;
  } catch (error) {
    throw error;
  }
};

const getOrganization = async (userId) => {
  try {
    const user = await findUserById(userId);
    if (!user || user == null || !user?.organization)
      throw Constants.ERROR_NO_USER;
    return user.organization;
  } catch (error) {
    throw error;
  }
};

const addNewPassword = async (userId, password) => {
  const hash = await hashedPassword(password);
  return await UserModel.updateOne(
    { _id: userId },
    { $set: { password: hash } },
    { new: true }
  );
};

module.exports = {
  createAdminUser,
  createUser,
  findUser,
  addForm,
  getAccessToken,
  findUserByEmail,
  findUserByName,
  findUserById,
  getEmail,
  addNewPassword,
  getOrganization,
};
