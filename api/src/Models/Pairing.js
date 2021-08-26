const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("pairing", {
    name: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    
  });
};