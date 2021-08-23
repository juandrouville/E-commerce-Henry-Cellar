const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo de usuario
  sequelize.define("user", {
    id: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // password: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // resetPass: {
    //   type: DataTypes.STRING,
    //   defaultValue: "",
    // },
    subscribed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    blocked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    googleId: {
      type: DataTypes.TEXT
    },
    calle: {
      type: DataTypes.TEXT
    },
    numero: {
      type: DataTypes.INTEGER
    },
    localidad: {
      type: DataTypes.TEXT
    },
    provincia: {
      type: DataTypes.TEXT
    },
    codigoPostal: {
      type: DataTypes.INTEGER
    },
    numeroDeTarjeta: {
      type: DataTypes.INTEGER,
    },
    nombreT: {
      type: DataTypes.STRING,
    },
    fechaDeExpiracion: {
      type: DataTypes.STRING,
    },
    codigoDeSeguridad: {
      type: DataTypes.INTEGER,
    },
  });
};
