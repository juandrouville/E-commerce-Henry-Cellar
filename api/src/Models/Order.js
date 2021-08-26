const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("order", {
    state: {
      type: DataTypes.ENUM(["pending","accepted","rejected","sent","received"]),
      allowNull:false,
    },
    total:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
    paymentMethod:{
        type:DataTypes.STRING,
       // allowNull:false,
        defaultValue:"No specified yet"
    },
    shippingMethod:{
        type:DataTypes.STRING,
        //allowNull:false,
        defaultValue:"Retire in local"
    },
    paymentid: {
      type: DataTypes.INTEGER,
        defaultValue: 0
    },
    paymentstatus: {
      type: DataTypes.STRING,
        defaultValue: ""
    },
    merchantorderid: {
      type: DataTypes.STRING,
        defaultValue: 0
    }
  });
};