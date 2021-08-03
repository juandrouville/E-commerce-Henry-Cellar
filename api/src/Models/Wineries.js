const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("wineries", {
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    location :{
        type:DataTypes.STRING
    },

    email:{
        type:DataTypes.STRING
    }
  });
  
};