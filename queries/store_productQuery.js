const db = require("../db/dbConfig.js");

// Get price information for a product across all stores
const getComparisonResults = async (productId) => {
  try {
    const results = await db.manyOrNone(
      "SELECT store_id, product_price FROM store_product WHERE product_id = $1",
      productId
    );
    return results;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getComparisonResults,
};
