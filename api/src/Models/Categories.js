const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("categories", {
    name: {
      type: DataTypes.ENUM(["Wine","Bazaar","Accessories"]),
      allowNull:false,
    },
    varietal:{
      type:DataTypes.STRING,
      allowNull:true
    },
    type:{
      type:DataTypes.ENUM(["Red","White","Pink","Sparkling"])
    }
  });
};