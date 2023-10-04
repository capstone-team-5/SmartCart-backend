const db = require("../db/dbConfig.js");

// get all Products
const getAllProducts = async () => {
  try {
    const allProducts = await db.any(
      "SELECT * FROM product ORDER BY product_id"
    );
    return allProducts;
  } catch (error) {
    throw error;
  }
};

// get one product
const getOneProduct = async (id) => {
  try {
    const oneProduct = await db.oneOrNone(
      "SELECT * FROM product WHERE product_id = $1",
      id
    );
    return { result: oneProduct };
  } catch (error) {
    throw { error };
  }
};

// get all Product Categories

const getAllCategories = async () => {
  try {
    const allCategories = await db.any(
      "SELECT Distinct(product_category) FROM product ORDER BY product_category"
    );
    return allCategories;
  } catch (error) {
    throw error;
  }
};

// get all Product by one category
const getAllProductsOneCategory = async (category) => {
  try {
    const allProductsOneCategory = await db.any(
      "SELECT * FROM product where product_category = $1 order by product_id",
      [category]
    );
    return allProductsOneCategory;
  } catch (error) {
    throw error;
  }
};

// get 4 images to show CART
const getfourCart = async () => {
  try {
    const fourCart = await db.any(
      "select  * from product where product_name = 'Orange Juice' or product_name = 'Bru Filter Coffee' or product_name = 'Bajan Pepper Sauce' or product_name = 'Seasoned Salt' ORDER BY product_id"
    );
    return fourCart;
  } catch (error) {
    throw error;
  }
};

// get 4 images to show $mrt
const getfourMRT = async () => {
  try {
    const fourMRT = await db.any(
      "select  * from product where product_name = 'Salmon' or product_name = 'Jumbo Coconut Shrimp' or product_name = 'Family Size Chicken Nuggets' or product_name = 'Frozen Meatballs' ORDER BY product_id"
    );
    return fourMRT;
  } catch (error) {
    throw error;
  }
};

// get 4 orange fruits
const getfourFruits = async () => {
  try {
    const fourFruits = await db.any(
      "select * from product where product_name = 'Dole Frozen Dark Sweet Cherries' or product_name = 'Beets' or product_name = 'Oranges' or product_name = 'Butter Lettuce' ORDER BY product_id"
    );
    return fourFruits;
  } catch (error) {
    throw error;
  }
};

// get 4 green vegetables
const getfourGreens = async () => {
  try {
    const fourGreens = await db.any(
      "select * from product where product_name = 'Almonds' or product_name = 'Yoplait Original Strawberry Yogurt' or product_name = 'Dairy Milk Roast Almond' or product_name = 'Lays Blue Chips' ORDER BY product_id"
    );
    return fourGreens;
  } catch (error) {
    throw error;
  }
};

// get All International - with pagination do not delete

// const getAllInternational = async (page) => {
//   try {
//     const pageSize = 15; // Set the page size to 15

//     // Calculate the offset based on the page number
//     const offset = (page - 1) * pageSize;

//     const allInternational = await db.any(
//       "select * from product where product_is_international = True order by product_id LIMIT $1 OFFSET $2",
//       [pageSize, offset]
//     );
//     return allInternational;
//   } catch (error) {
//     throw error;
//   }
// };

// get All International - without pagination
// "SELECT * FROM product WHERE product_is_international = TRUE ORDER BY RANDOM()"

const getAllInternational = async () => {
  try {
    const allInternational = await db.any(
      "select * from product where product_is_international = True"
    );
    return allInternational;
  } catch (error) {
    throw error;
  }
};

// get all dairy
const getAllDairy = async (page) => {
  try {
    const pageSize = 15; // Set the page size to 15

    // Calculate the offset based on the page number
    const offset = (page - 1) * pageSize;

    const allDairy = await db.any(
      "select * from product where product_category = 'Dairy' ORDER BY product_id LIMIT $1 OFFSET $2",
      [pageSize, offset]
    );
    return allDairy;
  } catch (error) {
    throw error;
  }
};

// get all nuts
const getAllNuts = async (page) => {
  try {
    const pageSize = 15; // Set the page size to 15

    // Calculate the offset based on the page number
    const offset = (page - 1) * pageSize;

    const allNuts = await db.any(
      "select * from product where product_category = 'Nuts' ORDER BY product_id LIMIT $1 OFFSET $2",
      [pageSize, offset]
    );
    return allNuts;
  } catch (error) {
    throw error;
  }
};

// get all spices
const getAllSpices = async (page) => {
  try {
    const pageSize = 15; // Set the page size to 15

    // Calculate the offset based on the page number
    const offset = (page - 1) * pageSize;

    const allSpices = await db.any(
      "select * from product where product_category = 'Spices' ORDER BY product_id LIMIT $1 OFFSET $2",
      [pageSize, offset]
    );
    return allSpices;
  } catch (error) {
    throw error;
  }
};

// get all legumes
const getAllLegumes = async (page) => {
  try {
    const pageSize = 15; // Set the page size to 15

    // Calculate the offset based on the page number
    const offset = (page - 1) * pageSize;

    const allLegumes = await db.any(
      "select * from product where product_category = 'Legumes' ORDER BY product_id LIMIT $1 OFFSET $2",
      [pageSize, offset]
    );
    return allLegumes;
  } catch (error) {
    throw error;
  }
};

// get all snacks
const getAllSnacks = async (page) => {
  try {
    const pageSize = 15; // Set the page size to 15

    // Calculate the offset based on the page number
    const offset = (page - 1) * pageSize;

    const allSnacks = await db.any(
      "select * from product where product_category = 'Snacks' ORDER BY product_id LIMIT $1 OFFSET $2",
      [pageSize, offset]
    );
    return allSnacks;
  } catch (error) {
    throw error;
  }
};

// get all grains
const getAllGrains = async (page) => {
  try {
    const pageSize = 15; // Set the page size to 15

    // Calculate the offset based on the page number
    const offset = (page - 1) * pageSize;

    const allGrains = await db.any(
      "select * from product where product_category = 'Grains' ORDER BY product_id LIMIT $1 OFFSET $2",
      [pageSize, offset]
    );
    return allGrains;
  } catch (error) {
    throw error;
  }
};

// get all breads
const getAllBakery = async (page) => {
  try {
    const pageSize = 15; // Set the page size to 15

    // Calculate the offset based on the page number
    const offset = (page - 1) * pageSize;

    const allBakery = await db.any(
      "select * from product where product_category = 'Bakery' ORDER BY product_id LIMIT $1 OFFSET $2",
      [pageSize, offset]
    );
    return allBakery;
  } catch (error) {
    throw error;
  }
};

// get all Meat and seafood and poultry
const getAllMeat = async (page) => {
  try {
    const pageSize = 15; // Set the page size to 15

    // Calculate the offset based on the page number
    const offset = (page - 1) * pageSize;

    const allMeat = await db.any(
      "select * from product where product_category = 'Meat' or product_category = 'Poultry' or product_category = 'Seafood' ORDER BY product_id LIMIT $1 OFFSET $2",
      [pageSize, offset]
    );
    return allMeat;
  } catch (error) {
    throw error;
  }
};

// get all fruits
const getAllFruits = async (page) => {
  try {
    const pageSize = 15; // Set the page size to 15

    // Calculate the offset based on the page number
    const offset = (page - 1) * pageSize;

    const allFruits = await db.any(
      "SELECT * FROM product WHERE product_category = 'Fruit' ORDER BY product_id LIMIT $1 OFFSET $2",
      [pageSize, offset]
    );

    return allFruits;
  } catch (error) {
    throw error;
  }
};

// get all vegetables
const getAllVegetables = async (page) => {
  try {
    const pageSize = 15; // Set the page size to 15

    // Calculate the offset based on the page number
    const offset = (page - 1) * pageSize;

    const allVegetables = await db.any(
      "select * from product where product_category = 'Vegetable' ORDER BY product_id LIMIT $1 OFFSET $2",
      [pageSize, offset]
    );
    return allVegetables;
  } catch (error) {
    throw error;
  }
};

// // filter

// const getFilteredProducts = async (filters) => {
//   const queryParams = [];
//   const conditions = [];

//   // Construct the WHERE clause based on the filters
//   Object.keys(filters).forEach((key) => {
//     if (filters[key]) {
//       conditions.push(`${key} = $${queryParams.length + 1}`);
//       queryParams.push(filters[key]);
//     }
//   });

//   // Construct the SQL query
//   const query = `SELECT * FROM product WHERE ${conditions.join(" AND ")}`;

//   try {
//     const result = await db.any(query, queryParams);
//     return result;
//   } catch (error) {
//     throw error;
//   }
// };

module.exports = {
  getAllProducts,
  getOneProduct,
  getAllCategories,
  getAllProductsOneCategory,
  getfourCart,
  getfourMRT,
  getfourGreens,
  getfourFruits,
  getAllDairy,
  getAllVegetables,
  getAllFruits,
  getAllNuts,
  getAllSpices,
  getAllLegumes,
  getAllSnacks,
  getAllGrains,
  getAllBakery,
  getAllMeat,
  getAllInternational,
  // getFilteredProducts,
};
