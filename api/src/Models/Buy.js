const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('buy', {
    id: {
      type:DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
  });
};