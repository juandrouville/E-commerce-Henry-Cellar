const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("wineries", {
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    location :{
        type:DataTypes.STRING,
        allowNull:false,
    },

    email:{
        type:DataTypes.STRING,
        allowNull: false,
    },

    description:{
      type:DataTypes.TEXT,
      allowNull: false,
    }
  });
  
};