

const { Product, Categories,Wineries } = require('../db');




async function SetDataInitial(arrayProducts) {
  try {
    for (var e in arrayProducts) {

      await Product.findOrCreate({
        where: {
          name: arrayProducts[e].name,
          image: arrayProducts[e].img,
          description: arrayProducts[e].description,
          price: arrayProducts[e].precio,
          stock: arrayProducts[e].stock,
        },
      });

      var oneProduct = await Product.findOne({ where: { name: arrayProducts[e].name } });



      await arrayProducts[e].category.map(async (e) => {
        await Categories.findOrCreate({ where: { name: e } });
        var category = await Categories.findOne({ where: { name: e } });
        await oneProduct.addCategories(category);
      })

      if (arrayProducts[e].bodega) {

        await Wineries.findOrCreate({ where: { name: arrayProducts[e].bodega } });
        var winerie = await Wineries.findOne({ where: { name: arrayProducts[e].bodega } });
        await winerie.setProducts(oneProduct);
      }

    };

  } catch (error) {
    return console.error(error);
  };
};

module.exports = {
  SetDataInitial,
};





