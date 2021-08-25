const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("order", {
    state: {
      type: DataTypes.ENUM(["pending","accepted","rejected","sent","recieved"]),
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
        defaultValue:"No specified yet"
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