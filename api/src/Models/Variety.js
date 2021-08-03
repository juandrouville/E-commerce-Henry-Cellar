const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("variety", {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
