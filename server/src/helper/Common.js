const bcrypt = require('bcrypt');
const crypto = require('crypto');

const getToken = () => crypto.randomBytes(32).toString('hex');

const getHashedToken = async (token) => {
  const hash = await hashedPassword(token);
  return hash;
};

const hashedPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const compareHashes = async (hash1, hash2) => {
  return await bcrypt.compare(hash1, hash2);
};

module.exports = { getToken, getHashedToken, hashedPassword, compareHashes };
