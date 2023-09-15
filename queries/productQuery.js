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

module.exports = {
  getAllProducts,
  getAllCategories,
  getOneProduct,
};
