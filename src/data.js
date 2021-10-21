import photo from "./assets/images/conos_Blunt.webp";
import photo2 from "./assets/images/celulosa_coffe.jpg";
import photo3 from "./assets/images/fertilizante_veg.jpg";
import photo4 from "./assets/images/Filtros_SlimOcbt.jpg";

//Make THIS
//Primera opción de categories

export const getCategories = () => [
  {
    id: "coffe",
    description: "Celulosas sabor coffe",
  },
  {
    id: "pokemona",
    description: "Pipa pokemona",
  },
];

export const data = [
  {
    id: 0,
    title: "Conos Blunts",
    description: "Conos Blunt Rey",
    longDescription:
      "Blunt Rey Orgánicos son conos perfectos para aquellas personas que no se dan maña armando con las manos, ya que los conos vienen enrolados y solo queda rellenarlos.  Se caracteriza por una combustión lenta y ser 100% no blanqueados. Cada cajita individual trae 32 conos, todos los vienen con filtro tip incluido y son King size (110mm aprox.). Podes comprarlos a partir de 20 unidades.",
    price: 500,
    pictureUrl: photo,
    categoryes: "Conos blunts",
    stock: 1,
  },
  {
    id: 1,
    title: "Celulosa Coffe",
    description: "Celulosa Coffe",
    longDescription:
      "Papel Celulosa hecho con extractos de café, ideal para probar un sabor diferente.",
    price: 1600,
    pictureUrl: photo2,
    categoryes: "Celulosas one",
    stock: 3,
  },

  {
    id: 2,
    title: "Fertilizantes",
    description: "Fertilizantes líquidos",
    longDescription:
      "Este fertilizante líquido proporciona fertilización óptima durante el crecimiento. Proporciona una base sólida para que la planta puede florecer plenamente en una etapa posterior.",
    price: 1600,
    pictureUrl: photo3,
    categoryes: "Fertilizantes one",
    stock: 3,
  },
  {
    id: 3,
    title: "Filtros ocb",
    description: "Filtros ocb regular 8mm",
    longDescription:
      "El filtro Slim Palmer x 600 unidades debe ser utilizado con papeles y tabaco de liar, esta hecho con papel natural y acetato de celulosa.",
    price: 600,
    pictureUrl: photo4,
    categoryes: "Filtros Ocb",
    stock: 4,
  },
  {
    id: 4,
    title: "Conos Blunts",
    description: "Conos Blunt Rey",
    longDescription:
      "Blunt Rey Orgánicos son conos perfectos para aquellas personas que no se dan maña armando con las manos, ya que los conos ya vienen enrolados y solo queda rellenarlos.  Se caracteriza por una combustión lenta y 100% no blanqueados. Cada cajita individual trae 32 conos, todos los vienen con filtro tip incluido y son King size (110mm aprox.). Podes comprarlos a partir de 20 unidades.",
    price: 500,
    pictureUrl: photo,
    categoryes: "Conos blunts",
    stock: 1,
  },
  {
    id: 5,
    title: "Filtros Slim",
    description: "Filtros Slim Palmer",
    longDescription:
      " El filtro Slim Palmer x 600 unidades debe ser utilizado con papeles y tabaco de liar, esta hecho con papel natural y acetato de celulosa.",
    price: 600,
    pictureUrl: photo,
    stock: 10,
  },

  {
    id: 6,
    title: "Tabla 6",
    description: "Celulosa Coffe",
    longDescription:
      "Papel Celulosa hecho con extractos de café, ideal para probar un sabor diferente.",
    price: 1700,
    pictureUrl: photo2,
    stock: 12,
  },
  //
  {
    id: 7,
    title: "Tabla 7",
    description: "Celulosa Coffe",
    longDescription:
      "Papel Celulosa hecho con extractos de café, ideal para probar un sabor diferente.",
    price: 700,
    pictureUrl: photo2,
    stock: 12,
  },
  {
    id: 8,
    title: "Tabla 8",
    description: "Celulosa Coffe",
    longDescription:
      "Papel Celulosa hecho con extractos de café, ideal para probar un sabor diferente.",
    price: 700,
    pictureUrl: photo2,
    stock: 12,
  },
];
