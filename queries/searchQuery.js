const db = require("../db/dbConfig.js");

// search all Products
const searchAllProducts = async (category, searchTerm) => {
  try {
    let baseQuery = "SELECT * FROM product";

    if (searchTerm) {
      baseQuery += "WHERE category ILIKE %" + searchTerm + "%";
    }

    const allProducts = await db.any(sqlQuery, query ? [`%${query}%`] : []);
    return allProducts;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  searchAllProducts,
};
