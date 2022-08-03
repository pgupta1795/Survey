const UserUtils = require('../utils/UserUtils');
const Constants = require('../../../helper/Constants');
const { compareHashes } = require('../../../helper/Common');
const { findTokenByUserId } = require('../../Token/utils/TokenUtils');

const generateTokenForUser = (user) => {
  const { _id: id, name, email, admin, organization, createdForms } = user;
  const accessToken = UserUtils.getAccessToken({
    id,
    name,
    email,
    admin,
    organization,
    createdForms,
  });
  return accessToken;
};

const refresh = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await UserUtils.findUserById(userId);
    if (user == null) {
      return res.status(404).send(Constants.ERROR_NO_USER);
    }
    const accessToken = generateTokenForUser(user);
    res.status(200).json({
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const signup = async (req, res) => {
  try {
    const {
      name: uName,
      password: uPassword,
      email: uEmail,
      organization: uOrganization,
    } = req.body;
    if (!uEmail || uEmail === null) {
      return res.status(400).send(Constants.ERROR_LOGIN_FAILED);
    }
    let user = await UserUtils.findUserByEmail(uEmail);
    if (!user) {
      console.log(Constants.ERROR_USER_EXISTS);
      user = await UserUtils.createUser(
        uName,
        uEmail,
        uPassword,
        uOrganization
      );
    }
    const accessToken = generateTokenForUser(user);
    res.status(200).json({
      accessToken,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const login = async (req, res) => {
  try {
    const { email: uEmail, password: uPassword } = req.body;
    if (!uEmail || uEmail === null) {
      return res.status(400).send(Constants.ERROR_LOGIN_FAILED);
    }
    const user = await UserUtils.findUser(uEmail, uPassword);
    if (!user || user === null) return res.send(Constants.ERROR_NO_USER);
    const accessToken = generateTokenForUser(user);
    res.status(200).json({
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const resetPassword = async (req, res) => {
  try {
    const { email, password, token } = req.body;
    const user = await UserUtils.findUserByEmail(email);
    if (!user) {
      console.log(Constants.ERROR_USER_EXISTS);
      return res.status(400).send(Constants.ERROR_USER_EXISTS);
    }
    const userId = user._id;
    const resetToken = await findTokenByUserId(userId);
    if (!resetToken) return res.status(400).send(Constants.ERROR_TOKEN_EXPIRED);
    const isValid = await compareHashes(token, resetToken.token);
    if (!isValid) return res.status(400).send(Constants.ERROR_TOKEN_EXPIRED);
    const modified = await UserUtils.addNewPassword(userId, password);
    console.log(modified);
    const accessToken = generateTokenForUser(user);
    res.status(200).json({
      accessToken,
      message: modified,
    });
  } catch (error) {
    console.log(error);
    res.send('Unable to reset Password, Please try later');
  }
};

/**
 * Returns list of all organizations, containing their users
 * @param {*} req
 * @param {*} res
 * @returns
 */
const getOrganizations = async (req, res) => {
  try {
    const organizations = await UserUtils.findOrganizations();
    if (!organizations || organizations === null)
      return res.status(400).send(Constants.ERROR_NO_USERS);
    res.status(200).json({
      organizations,
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = {
  generateTokenForUser,
  signup,
  login,
  refresh,
  resetPassword,
  getOrganizations,
};
