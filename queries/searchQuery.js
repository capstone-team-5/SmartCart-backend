const db = require("../db/dbConfig.js");

// search all Products
const searchAllProducts = async (query) => {
  try {
    let sqlQuery = "SELECT * FROM product ORDER BY product_id";

    if (query) {
      sqlQuery = "SELECT * FROM product WHERE product_name ILIKE $1";
    }

    const allProducts = await db.any(sqlQuery, query ? [`%${query}%`] : []);
    return allProducts;
  } catch (error) {
    throw error;
  }
};

// Search products by name
const searchByName = async (query) => {
  try {
    const result = await db.any(
      "SELECT * FROM product WHERE product_name ILIKE $1",
      [`%${query}%`]
    );
    return result;
  } catch (error) {``
    throw error;
  }
};

// Search products by category
const searchByCategory = async (query) => {
  try {
    const result = await db.any(
      "SELECT * FROM product WHERE product_category ILIKE $1",
      [`%${query}%`]
    );
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  searchAllProducts,
  searchByName,
  searchByCategory,
  // Add other search functions here
};
