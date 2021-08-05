const server = require('./src/app.js');
const { conn } = require('./src/db.js');
<<<<<<< HEAD
=======
// const {Product} =require('./src/db');
// const {Categories} =require('./src/db');
const { SetDataInitial } = require('./src/initialContents/SetDataInitial');
const { products } = require('./src/initialContents/DataWines');
>>>>>>> 8026d652b1f0d55e748b7f43484733f13a1efab8

// Syncing all the models at once.
conn.sync({ force: true })
.then(() => {
    SetDataInitial(products);
    console.log("sincroniza servidor 3001")
    server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});