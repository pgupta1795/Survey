const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('../model/User');

const findUserById = async (userId) => {
  return await UserModel.findOne({ _id: userId }).lean();
};

const findUserByName = async (name) => {
  return await UserModel.findOne({ name }).lean();
};

const findUserByEmail = async (email) => {
  return await UserModel.findOne({ email }).lean();
};

const createUser = async (name, email, password, organization) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await new UserModel({
    name,
    email,
    organization,
    password: hashedPassword,
  }).save();
  console.log('USER CREATED : ');
  console.log(user);
  return user;
};

const findUser = async (email, password) => {
  let user = await findUserByEmail(email);
  if (!user) {
    return null;
  }
  const compare = await bcrypt.compare(password, user.password);
  if (!compare) {
    return null;
  }
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

module.exports = {
  createUser,
  findUser,
  addForm,
  getAccessToken,
  findUserByEmail,
  findUserByName,
  findUserById,
};
