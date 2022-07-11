const ImageModel = require('../model/Image');

const getImage = async (req, res) => {
  try {
    const result = await ImageModel.find().lean();
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

/**
 * FILE : file passed from client
 * META : all other values passed from the client, like name, etc
 * @param {req} req
 * @param {res} res
 */
const postImage = async (req, res) => {
  try {
    const { file, protocol } = req;
    const img = await new ImageModel({
      image: file.filename,
    }).save();
    console.log(img);
    res.json({
      image: img.image,
      host: `${protocol}://${req.get('host')}`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = { getImage, postImage };
