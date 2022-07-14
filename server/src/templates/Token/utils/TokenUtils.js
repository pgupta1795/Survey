const { getToken, getHashedToken } = require('../../../helper/Common');
const TokenModel = require('../model/Token');

const findTokenByUserId = async (userId) => {
  return await TokenModel.findOne({ userId });
};

const createToken = async (user) => {
  const token = getToken();
  const hash = await getHashedToken(token);
  const tokenObject = await new TokenModel({
    userId: user._id,
    token: hash,
    createdAt: Date.now(),
  }).save();
  if (!tokenObject) throw 'Unable to create Token';
  return token;
};

const generateToken = async (user) => {
  try {
    const currentToken = await findTokenByUserId(user._id);
    if (currentToken) await currentToken.deleteOne();
    return await createToken(user);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = { generateToken, findTokenByUserId };
