const db = require("../db/dbConfig.js");

// get all Stores
const getComparisonResults = async (productNames) => {
  try {
    const query = `
            SELECT p.product_name, p.product_price, s.store_name
            FROM product p
            INNER JOIN store s ON s.store_id = p.store_id
            WHERE p.product_name = ANY($1)
            ORDER BY s.store_name, p.product_name;    
      `;
    const comparisonResults = await db.any(query, [productNames]);
    return comparisonResults;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getComparisonResults,
};
