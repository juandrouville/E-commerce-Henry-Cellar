const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("orderline", {
    product: {
      type: DataTypes.STRING,
    },
    unitPrice:{
      type:DataTypes.INTEGER,
      defaultValue:1,
      allowNull:false
    },
    amount:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    subTotal:{
        type:DataTypes.INTEGER,
        allowNull:false,
    }
  });
};