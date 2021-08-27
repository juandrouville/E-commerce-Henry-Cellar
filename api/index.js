const server = require('./src/app.js');
const { conn } = require('./src/db.js');
// const {Product} =require('./src/db');
// const {Categories} =require('./src/db');
const { SetDataInitial } = require('./src/initialContents/SetDataInitial');
const { products } = require('./src/initialContents/DataWines');

// Syncing all the models at once.
conn.sync({ force: true })
.then(() => {
    SetDataInitial(products);
    console.log("sincroniza servidor 3001")
    server.listen(process.env.PORT || 3001 , () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});