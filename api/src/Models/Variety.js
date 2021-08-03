const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("variety", {
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
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
