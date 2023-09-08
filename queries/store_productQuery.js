const db = require("../db/dbConfig.js");

// Get price information for multiple products across all stores
const getComparisonResults = async (productIds) => {
  try {
    const results = await db.manyOrNone(
      "SELECT store_id, product_id, product_price FROM store_product WHERE product_id IN ($1:csv)",
      [productIds]
    );

    return results;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getComparisonResults,
};
