const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("order", {
    state: {
      type: DataTypes.ENUM(["pending","finished"]),
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
        defaultValue:"No specified yet"
    },
    shippingMethod:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:"No specified yet"
    }
  });
};