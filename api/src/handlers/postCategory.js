const { Categories } = require("../db");
const { Op } = require("sequelize");

const postCategory = async (req, res, next) => {
  const { name } = req.body;
  try {
    const addCategory = await Categories.findOrCreate({
      where: {
        name: name,
      },
    });
    if (addCategory[1] === true) {
      return res
        .status(200)
        .json({ message: "Successfully created new category!" });
    } else {
      return res.status(200).json({ message: "The category already exists" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postCategory,
};
