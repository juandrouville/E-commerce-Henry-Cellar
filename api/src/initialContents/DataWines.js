const products = [
  {
    name: "Terra Malbec",
    img:
      "https://www.espaciovino.com.ar/media/default/0001/63/thumb_62806_default_small.jpeg",
    description:
      "80% del vino es estacionado durante 6 meses en barricas de roble francés y americano, y el restante 20% en tanques de acero inoxidable para preservar la frescura del vino. Luego permanece en botella durante 6 meses antes de su expendio.",
    bodega: "Viniterra",
    precio: 432,
    stock: 30,
    category: ["Wine", "Tinto", "Malbec"],
    maridaje: ["Pescados", "Fiambres", "Ternera", "Comida Asitica", "Pastas"]
    
  },
  {
    name: "Postales Del Fin Del Mundo",
    img:
      "https://www.espaciovino.com.ar/media/default/0001/64/thumb_63323_default_big.jpeg",
    description: "6 meses en roble francés y americano",
    type: "Tinto",
    varietal: "Malbec",
    bodega: "Del Fin Del Mundo",
    precio: 540,
    stock: 30,
    category: ["Wine", "Tinto", "Malbec"],
    maridaje: ["Pescados", "Fiambres",  "Ternera", "Comida Asitica", "Pastas"]
  },
  {
    name: "Dv Catena Cabernet Malbec ",
    img:
      "https://www.espaciovino.com.ar/media/default/0001/53/thumb_52791_default_big.jpeg",
    description:
      "DV Catena Cabernet Sauvignon-Malbec es un vino elegante y complejo, de color rojo rubi con reflejos violetas.A la nariz, intenso y concentrado, presenta notas de especias aportadas por el Cabernet Sauvignon del viñedo La Pirámide, y notas de moras maduras y ciruelas, características del Malbec del viñedo Angélica, acompañadas por vainilla, tabaco y licor aportadas por la crianza en roble.En boca, de impacto dulce y gran complejidad, con taninos integrados y redondos, de final largo y persistente.",
    bodega: "Catena Zapata",
    precio: 1599.99,
    stock: 30,
    category: ["Wine", "Blend", "Tinto"],
    maridaje: ["Pescados", "Fiambres",  "Ternera", "Comida Asitica", "Pastas"]
  },
  {
    name: "Del Fin Del Mundo Special Blend",
    img:
      "https://www.espaciovino.com.ar/media/default/0001/55/thumb_54326_default_big.jpeg",
    description:
      "Color rojo profundo, muy intenso.Aroma potente recuerda a frutos rojos, especias y mermelada de frutas, notas a nuez de coco, ahumado y tabaco.En boca es frutado, delicado, de exquisito equilibrio, con taninos suaves y redondos. Su final de boca es elegante y prolongado. Vino de gran jerarquía.",
    bodega: "Del Fin del Mundo",
    precio: 387,
    stock: 30,
    category: ["Wine", "Blend", "Tinto"],
    maridaje: ["Pescados", "Fiambres",  "Ternera", "Comida Asitica", "Pastas"]
  },
  {
    name: "Quara Reserva Cabeernet Sauvignon",
    img:
      "https://www.espaciovino.com.ar/media/default/0001/59/thumb_58415_default_big.jpeg",
    description:
      "De color rojo rubí, intenso y de buen matiz.En nariz, muy frutado y expresivo, con notas de pimientos y pimientas típicos de ese terroir.De buena estructura en boca, voluminoso, con taninos intensos y muy maduros. De final largo y aromático, con notas complejas de vainilla y tostado, aportadas por su paso por madera.",
    bodega: "Finca Quara",
    precio: 410,
    stock: 30,
    category: ["Wine", "Cabernet Sauvignon", "Tinto"],
    maridaje: ["Pescados", "Fiambres", "Ternera", "Comida Asitica", "Pastas"]
  },
  {
    name: "Famiglia Bianchi Cabernet Sauvignon",
    img:
      "https://www.espaciovino.com.ar/media/default/0001/53/thumb_52940_default_big.jpeg",
    description:
      "Vino de color rojo rubí intenso y muy buena lágrima.Vino de una elegancia y personalidad destacada, sus aromas especiados seducen por su complejidad e intensidad. Pimienta negra, regaliz, cedro, granos de café tostados y dejos de menta fresca se arremolinan alrededor de frutadas sensaciones de cassis, moras y frutos silvestres.En boca se expresa ampliamente con gran persistencia de aromas y una notable y armoniosa estructura que acentúan su linaje real.",
    bodega: "Casa Bianchi",
    precio: 810,
    stock: 30,
    category: ["Wine", "Cabernet Sauvignon", "Tinto"],
    maridaje: ["Pescados", "Fiambres", "Ternera", "Comida Asitica", "Pastas"]
  },
  {
    name: "Pulenta Estate Merlot",
    img:
      "https://www.espaciovino.com.ar/media/default/0001/55/thumb_54228_default_big.jpeg",
    description:
      "Estas notables variaciones de temperatura entre el día y la noche, llevan a nuestros viñedos a lograr colores muy profundos, con caracteres frutados muy intensos, aquí, la cereza, el eucalipto, y la menta emergen, para combinarse con las excelentes notas de madera. su gran estructura y persistencia en boca hacen de éste un gran vino.",
    bodega: "Pulenta Estate",
    precio: 1750,
    stock: 30,
    category: ["Wine", "Tinto", "Merlot"],
    maridaje: ["Pescados", "Fiambres", "Carnes Blancas", "Ternera", "Comida Asitica", "Pastas"]
  },
  {
    name: "Casa Boher Merlot",
    img:
      "https://www.espaciovino.com.ar/media/default/0001/56/thumb_55354_default_big.jpeg",
    description:
      "Vista:A la vista presenta un color rojo rubí muy intenso con tintes violáceos.Nariz:El aroma de este vino refleja la prolongada maduración de sus bayas donde se perciben frutas secas, guindado, suave pimiento dulce y cassis.Boca: A la boca tiene taninos suaves y buena estructura. Su contenido alcohólico da sensación de dulzura. Con sabores a ciruela y pasas de uva",
    bodega: "Rosell Boher",
    precio: 1100,
    stock: 30,
    category: ["Wine", "Tinto", "Merlot"],
    maridaje: ["Pescados", "Fiambres", "Carnes Blancas", "Ternera", "Comida Asitica", "Pastas"]
  },
  {
    name: "Sacacorcho 2 tiempos Azul WineFroz",
    img:
      "https://www.espaciovino.com.ar/media/default/0001/56/thumb_55299_default_big.jpeg",
    description: "Sacacorcho 2 Tiempos en Color Azul",
    bodega: null,
    precio: 550,
    stock: 30,
    category: ["accessories"],
  },
  {
    name: "Sacacorcho Caucho Winefroz",
    img:
      "https://www.espaciovino.com.ar/media/default/0001/56/thumb_55288_default_big.jpeg",
    description:
      "Peso: Peso bruto 0,3kg Medidas: Ancho 5 cm - Alto 26 cm - Profundidad 5 cm Medidas con caja: Ancho 10,5 cm - Alto 28 cm - Profundidad 9,5 cm Pilas: el modelo funciona con 4 Pilas AA (no incluye las mismas).",
    bodega: null,
    precio: 4150,
    stock: 30,
    category: ["accessories"],
  },
  {
    name: "Sacacorcho Acero Winefroz",
    img:
      "https://www.espaciovino.com.ar/media/default/0001/56/thumb_55287_default_big.jpeg",
    description:
      "Peso: Peso bruto 0,4kg Medidas: Ancho 5 cm - Alto 27 cm - Profundidad 5 cm Medidas con caja: Ancho 10,5 cm - Alto 32,5 cm - Profundidad 9 cm Pilas: el modelo funciona con 4 Pilas AA (no incluye las mismas).",
    bodega: null,
    precio: 4150,
    stock: 30,
    category: ["accessories"],
  },
  {
    name: "Aireador de Vino Winefroz",
    img:
      "https://www.espaciovino.com.ar/media/default/0001/56/thumb_55294_default_big.jpeg",
    description:
      "Verte el vino en forma uniforme y pausada de manera que entra en contacto con la máxima superficie de aire posible antes de entrar en la copa.",
    bodega: null,
    precio: 4999,
    stock: 30,
    category: ["accessories"],
  },
  {
    name: "Limpia Copa + Limpia Decanter Winefroz",
    img:
      "https://www.espaciovino.com.ar/media/default/0001/56/thumb_55292_default_big.jpeg",
    description:
      "Set de accesorios Winefroz que contiene: un (1) Limpia Copa y un (1) Limpia Decanter.",
    bodega: null,
    precio: 2150,
    stock: 30,
    category: ["accessories"],
  },
  {
    name: "Copa Bordeaux Linea Wine Lovers ",
    img:
      "https://www.espaciovino.com.ar/media/default/0001/54/thumb_53348_default_big.jpeg",
    description:
      "Altura: 226 mm. (8 8/9 inch),Capacidad: 580 ml. (20 1/2 oz),Diámetro: 92 mm. (3 5/8 inch)",
    bodega: null,
    precio: 1375,
    stock: 30,
    category: ["accessories"],
  },
  {
    name: "Copa Vino Blanco Linea Wine Lovers ",
    img:
      "https://www.espaciovino.com.ar/media/default/0001/54/thumb_53349_default_big.jpeg",
    description:
      "Altura: 209 mm. (8 2/9 inch),Capacidad: 380 ml. (13 2/5 oz),Diámetro: 80 mm. (3 1/7 inch)",
    bodega: null,
    precio: 1375,
    stock: 30,
    category: ["accessories"],
  },
  {
    name: "Decanter Casual",
    img:
      "https://www.espaciovino.com.ar/media/default/0001/62/thumb_61387_default_big.jpeg",
    description: "Alto: 240 mm,Capacidad: 1400 ml,Boca: 135 mm.",
    bodega: null,
    precio: 6930,
    stock: 30,
    category: ["accessories"],
  },
  {
    name: "Decanter Hybrid",
    img:
      "https://www.espaciovino.com.ar/media/default/0001/62/thumb_61388_default_big.jpeg",
    description: "Alto: 270 mm,Capacidad: 1800 ml,Boca: 164 mm.",
    bodega: null,
    precio: 1240,
    stock: 30,
    category: ["accessories"],
  },
  {
    name: "Alamos Chardonnay",
    img:
      "https://www.espaciovino.com.ar/media/default/0001/63/thumb_62742_default_big.jpeg",
    description:
      "De color amarillo oro con reflejos verdosos, ofrece intensos aromas a fruta tropical, cítricos y atractivas notas florales.",
    bodega: "Alamos",
    precio: 540,
    stock: 30,
    category: ["Wine", "Blanco", "Chardonnay"],
    maridaje: ["Aperitivos", "Ensaladas Platos a base de vegetales", "Fiambres", "Antipastos", "Pescados","Carnes Blancas", "Crudos","Quesos"]
  },
  {
    name: "La Linda Chardonnay",
    img:
      "https://www.espaciovino.com.ar/media/default/0001/54/thumb_53045_default_big.jpeg",
    description:
      "Delicado color amarillo brillante con reflejos dorados verdosos.",
    bodega: "Luigi Bosca",
    precio: 830,
    stock: 30,
    category: ["Wine", "Blanco", "Chardonnay"],
    maridaje: ["Aperitivos", "Ensaladas Platos a base de vegetales", "Fiambres", "Antipastos", "Pescados","Carnes Blancas", "Crudos","Quesos"]
  },

  {
    name: "Cafayate Torrontes",
    img:
      "https://www.espaciovino.com.ar/media/default/0001/55/thumb_54257_default_big.jpeg",
    description:
      "De color amarillo verdoso con reflejos acerados, resalta por sus aromas intensos de flores y frutos como rosas, jazmín, azares con durazno, manzana, ananá y citrus.",
    bodega: "Etchart",
    precio: 290,
    stock: 99,
    category: ["Wine", "Blanco", "Torrontes"],
    maridaje: ["Aperitivos", "Ensaladas Platos a base de vegetales", "Fiambres", "Antipastos", "Pescados","Carnes Blancas", "Crudos","Quesos"]
  },
  {
    name: "Nanni Torrontes",
    img:
      "https://www.espaciovino.com.ar/media/default/0001/63/thumb_62747_default_big.jpeg",
    description:
      "El Torrontés de Cafayate es renombrado y reconocido en el mundo entero por su distinción.",
    bodega: "Nanni",
    precio: 882,
    stock: 99,
    category: ["Wine", "Blanco", "Torrontes"],
    maridaje: ["Aperitivos", "Ensaladas Platos a base de vegetales", "Fiambres", "Antipastos", "Pescados","Carnes Blancas", "Crudos","Quesos"]
  },

  {
    name: "Federico Lopez Jerez",
    img:
      "https://www.espaciovino.com.ar/media/default/0001/64/thumb_63279_default_big.jpeg",
    description:
      "En su degustación surge un aroma etéreo y fino, generoso al gusto, pleno y aterciopelado.",
    bodega: "Lopez",
    precio: 441,
    stock: 99,
    category: ["Wine", "Blanco", "Blend"],
    maridaje: ["Aperitivos", "Ensaladas Platos a base de vegetales", "Fiambres", "Antipastos", "Pescados","Carnes Blancas", "Crudos","Quesos"]
  },
  {
    name: "Capriccio Dulce Natural Dolcezza",
    img:
      "https://www.espaciovino.com.ar/media/default/0001/62/thumb_61468_default_big.jpeg",
    description:
      "Elegante y amable, equilibrado con una acidez justa, final agradable y fresco.",
    bodega: "Dante Robino",
    precio: 276,
    stock: 99,
    category: ["Wine", "Blanco", "Blend"],
    maridaje: ["Aperitivos", "Ensaladas Platos a base de vegetales", "Fiambres", "Antipastos", "Pescados","Carnes Blancas", "Crudos","Quesos"]
  },
  {
    name: "Colon Rose",
    img:
      "https://www.espaciovino.com.ar/media/default/0001/60/thumb_59352_default_big.jpeg",
    description:
      "Aroma fresco intenso con notas a frutas y uvas recién cortadas.En boca es delicado, armónico y muy fácil de beber.",
    bodega: "Colon",
    precio: 220,
    stock: 99,
    category: ["Wine", "Rosado", "Malbec"],
    maridaje: ["Ensaladas y Platos a base de vegetales", "Fiambres","Pescados","Comida asitica"]
  },
  {
    name: "Las Perdices Malbec Ice",
    img:
      "https://www.espaciovino.com.ar/media/default/0001/62/thumb_61468_default_big.jpeg",
    description:
      "Aromas de frutas rojas sobremaduras, pasas de ciruelas y guindas.",
    bodega: "Las Perdices",
    precio: 1630,
    stock: 99,
    category: ["Wine", "Rosado", "Malbec"],
    maridaje: ["Ensaladas y Platos a base de vegetales", "Fiambres","Pescados","Comida asitica"]
  },
  {
    name: "Mendel Rosadia",
    img:
      "https://www.espaciovino.com.ar/media/default/0001/62/thumb_61779_default_big.jpeg",
    description:
      "Fresco, frutado, muy suave y fácil de beber. Su frescura le confiere un final persistente.",
    bodega: "Mendel",
    precio: 3200,
    stock: 99,
    category: ["Wine", "Rosado", "Blend"],
    maridaje: ["Ensaladas y Platos a base de vegetales", "Fiambres","Pescados","Comida asitica"]
  },
  {
    name: "Lagarde Goes Pink Rose",
    img:
      "https://www.espaciovino.com.ar/media/default/0001/60/thumb_59304_default_big.jpeg",
    description:
      "Aromas delicados y frescos. Hay notas de frutos como la guinda, la cereza y la frambuesa.",
    bodega: "Lagarde",
    precio: 1100,
    stock: 99,
    category: ["Wine", "Rosado", "Blend"],
    maridaje: ["Ensaladas y Platos a base de vegetales", "Fiambres","Pescados","Comida asitica"]
  },
  {
    name: "Finca Gabriel Rose",
    img:
      "https://www.espaciovino.com.ar/media/default/0001/63/thumb_62697_default_big.jpeg",
    description:
      "Su sabor es amable, con excelente equilibrio entre ácidez y estructura.",
    bodega: "Jorge Rubio",
    precio: 436,
    stock: 99,
    category: ["Wine", "Rosado", "Syrah"],
    maridaje: ["Ensaladas y Platos a base de vegetales", "Fiambres","Pescados","Comida asitica"]
  },
  {
    name: "Salentein Reserve Rosado",
    img:
      "https://www.espaciovino.com.ar/media/default/0001/60/thumb_59807_default_big.jpeg",
    description:
      "En la nariz se perciben intensos aromas a frutas frescas con sutiles notas florales.",
    bodega: "Salentein",
    precio: 900,
    stock: 99,
    category: ["Wine", "Rosado", "Syrah"],
    maridaje: ["Ensaladas y Platos a base de vegetales", "Fiambres","Pescados","Comida asitica"]
  },
];

module.exports = {
  products,
};
