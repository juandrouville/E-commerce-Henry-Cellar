const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("order", {
    state: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    total:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0
    },
    paymentMethod:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    shippingMethod:{
        type:DataTypes.STRING,
        allowNull:false,
    }
  });
};