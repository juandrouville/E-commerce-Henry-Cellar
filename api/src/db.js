require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/ecommerce`, {
  logging: false, 
  native: false, 
});
const basename = path.basename(__filename);

const modelDefiners = [];


fs.readdirSync(path.join(__dirname, '/Models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/Models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);


const { Categories,Order,Product,Review,User,Wineries,Orderline } = sequelize.models;

//Relations 
Categories.belongsToMany(Product, {through: 'products_categories'});
Product.belongsToMany(Categories, {through: 'products_categories'});

Order.hasMany(Orderline);
Orderline.belongsTo(Order);

User.hasMany(Order);
Order.belongsTo(User);

Orderline.hasOne(Product);

Product.hasMany(Review)
Review.belongsTo(Product)

module.exports = {
  ...sequelize.models, 
  conn: sequelize,     
};
