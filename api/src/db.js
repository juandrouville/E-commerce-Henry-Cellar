require('dotenv').config();
const { Sequelize } = require('sequelize');
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


const { Categories,Order,Orderline,Product,Review,User,Wineries } = sequelize.models;

//Relations 
Product.belongsToMany(Categories, {through: 'products_categories'});
Categories.belongsToMany(Product, {through: 'products_categories'});

// Product.hasMany(Wineries, {
//   foreignKey: 'product_wineries'
// });
// Wineries.belongsTo(Product);

// Review.hasMany(Product, {
//   foreignKey: 'review_product'
// });
// Product.belongsTo(Review);

// Orderline.hasMany(Order, {
//   foreignKey: 'orderline_order'
// });
// Order.belongsTo(Orderline);

// Product.hasOne(Orderline, {
//   foreignKey: 'product_orderline'
// });
// Orderline.belongsTo(Product);


// Review.hasOne(Order, {
//   foreignKey: 'review_order'
// });
// Order.belongsTo(Review);

// Order.hasMany(User, {
//   foreignKey: 'order_user'
// });
// User.belongsTo(Order);



module.exports = {
  ...sequelize.models, 
  conn: sequelize,     
};
