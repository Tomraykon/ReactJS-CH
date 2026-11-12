const products = [
  {
    id: 1,
    name: "Grand Theft Auto San Andreas",
    price: 49.99,
    category: "games",
    img: "/ProductImages/GrandTheftAutoSanAndreasCover.png",
    stock: 6,
    description: "Five years ago Carl Johnson escaped from the pressures of life in Los Santos, San Andreas... a city tearing itself apart with gang trouble, drugs and corruption. Where filmstars and millionaires do their best to avoid the dealers and gangbangers. Now, it's the early 90s. Carl's got to go home. His mother has been murdered, his family has fallen apart and his childhood friends are all heading towards disaster. On his return to the neighborhood, a couple of corrupt cops frame him for homicide. CJ is forced on a journey that takes him across the entire state of San Andreas, to save his family and to take control of the streets."
  },

  {
    id: 2,
    name: "Grand Theft Auto III",
    price: 49.99,
    category: "games",
    img: "/ProductImages/GrandTheftAutoIIICover.png",
    stock: 8,
    description: "Crime does pay. The hugely successful, highly controversial Grand Theft Auto franchise moves into 3 dimensions in the dark and seedy underworld of Liberty City. With the freedom to go anywhere and jack anyone, Grand Theft Auto 3 puts the dark, intriguing and ruthless world of crime at your fingertips, if you have enough guts to take it."
  },

  {
    id: 3,
    name: "Grand Theft Auto IV",
    price: 44.99,
    category: "games",
    img: "/ProductImages/GrandTheftAutoIVCover.png",
    stock: 4,
    description: "Niko is looking to escape his past and make a new life for himself in the land of opportunity. Johnny, a veteran member of The Lost biker gang, is caught in the middle of a vicious turf war with rival gangs for control of the city. Luis, part-time hoodlum and full-time assistant to legendary nightclub impresario Tony Prince (a.k.a. “Gay Tony”), is struggling with the competing loyalties of family and friends in a world in which everyone has a price. Their lives cross paths with devastating consequences as they fight to survive in a city torn apart by violence and corruption."
  },

  {
    id: 4,
    name: "Grand Theft Auto V",
    price: 34.99,
    category: "games",
    img: "/ProductImages/GrandTheftAutoVCover.png",
    stock: 3,
    description: "Grand Theft Auto V follows the lives of three criminals: Michael, Franklin, and Trevor, as they navigate the criminal underworld of Los Santos. Their stories intertwine through a series of heists, dangerous encounters, and unexpected events that challenge their loyalties and ambitions."
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find(
        (product) => product.id === Number(productId)
      );

      if (product) {
        resolve(product);
      } else {
        reject(new Error("Product not found"));
      }
    }, 1000);
  });
};