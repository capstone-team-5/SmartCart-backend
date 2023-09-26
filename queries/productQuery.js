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

// get 4 dairy
const getfourDairy = async () => {
  try {
    const fourDairy = await db.any(
      "select * from product where product_category = 'Dairy' and product_name = 'Large White Eggs' or product_name = 'Horizon Organic Whole Milk' or product_name = 'Land OLakes Salted Butter' or product_name = 'Yoplait Original Strawberry Yogurt' ORDER BY product_id"
    );
    return fourDairy;
  } catch (error) {
    throw error;
  }
};

// get all dairy
const getAllDairy = async () => {
  try {
    const allDairy = await db.any(
      "select * from product where product_category = 'Dairy' ORDER BY product_id"
    );
    return allDairy;
  } catch (error) {
    throw error;
  }
};

// get 4 orange fruits
const getfourFruits = async () => {
  try {
    const fourFruits = await db.any(
      "select * from product where (product_category = 'Fruit'  or product_category = 'Fruits') and product_name = 'Pineapples' or product_name = 'Apricots' or product_name = 'Oranges' or product_name = 'Mangoes' ORDER BY product_id"
    );
    return fourFruits;
  } catch (error) {
    throw error;
  }
};

// get all fruits
const getAllFruits = async () => {
  try {
    const allFruits = await db.any(
      "select * from product where product_category = 'Fruit'  or product_category = 'Fruits' ORDER BY product_id"
    );
    return allFruits;
  } catch (error) {
    throw error;
  }
};

// get 4 green vegetables
const getfourGreens = async () => {
  try {
    const fourGreens = await db.any(
      "select * from product where product_category = 'Vegetable' and product_name = 'Celery' or product_name = 'Watercress' or product_name = 'Butter Lettuce' or product_name = 'Spinach' ORDER BY product_id"
    );
    return fourGreens;
  } catch (error) {
    throw error;
  }
};

// get all vegetables
const getAllVegetables = async () => {
  try {
    const allVegetables = await db.any(
      "select * from product where product_category = 'Vegetables'  or product_category = 'Vegetable' ORDER BY product_id"
    );
    return allVegetables;
  } catch (error) {
    throw error;
  }
};

// get all Product Categories

const getAllCategories = async () => {
  try {
    const allCategories = await db.any(
      "SELECT Distinct(product_category) FROM product"
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
  getAllCategories,
  getOneProduct,
  getAllProductsOneCategory,
  getfourDairy,
  getfourGreens,
  getfourFruits,
  getAllDairy,
  getAllVegetables,
  getAllFruits,

  // getFilteredProducts,
};
