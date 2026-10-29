
const products = [
  {
    id: 1,
    name: "Grand Theft Auto San Andreas",
    price: 50,
    category: "games",
    img: "/ProductImages/GrandTheftAutoSanAndreasCover.png",
    stock: 5,
    description: "Aventura de acción protagonizada por Kratos para PlayStation 2."
  },

  {
    id: 2,
    name: "Grand Theft Auto III",
    price: 50,
    category: "games",
    img: "/ProductImages/GrandTheftAutoIIICover.png",
    stock: 8,
    description: "Juego de mundo abierto ambientado en San Andreas para PlayStation 2."
  },

  {
    id: 3,
    name: "Grand Theft Auto IV",
    price: 45,
    category: "games",
    img: "/ProductImages/GrandTheftAutoIVCover.png",
    stock: 4,
    description: "Simulador de conducción con numerosos vehículos y circuitos."
  },

  {
    id: 4,
    name: "Grand Theft Auto V",
    price: 35,
    category: "games",
    img: "/ProductImages/GrandTheftAutoVCover.png",
    stock: 3,
    description: "Aventura de supervivencia narrativa para PlayStation 3."
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};
