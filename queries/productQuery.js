const db = require("../db/dbConfig.js");

// get all Products
const getAllProducts = async () => {
  try {
    console.log("Executing getAllProducts query");
    const allProducts = await db.any(
      "SELECT * FROM product ORDER BY product_id"
    );

    // controllers/userController.js.js

    // INDEX
    // users.get()

    // CREATE
    // users.post("/", (req, res) =>{
    //  req.body.user
    // req.body = {user: {uuid: "bhdscagd82"}}
    // })

    // queries/users.js
    // INSERT INTO users (..,...,firebase_uuid) VALUES ($1, $2, $3)
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

module.exports = {
  getAllProducts,
  getOneProduct,
};
