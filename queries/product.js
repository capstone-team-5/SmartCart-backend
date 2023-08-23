const db =require("../db/dbConfig.js");

const getAllProducts = async() => {
    try {
        const allProducts = await db.any("SELECT * FROM product");
        return allProducts
    } catch (error) {
        return {error: error};
    }
};

const getProduct = async (id) => {
    console.log(id);
  try {
    const product = await db.one(`SELECT * FROM product WHERE id=${id}`);
    return product;
  } catch (error) {
    return { error: error };
  }
};

const createProduct = async (product) => {
    try {
        const newProduct = await db.one(
            `INSERT INTO 
            product (product_name, product_image)
            VALUES
            ($1, $2,)
            RETURNING *;`,[product.product_name, product.product_image]
        );
        return newProduct;
    } catch (error) {
        return {error : error}
    }
};

const updateProduct = async (id, product) => {
    try {
     const updatedProduct = await db.one(
        `UPDATE product SET product_name=$1, product_image=$2 WHERE id=$3 RETURNING *`, 
        [product.product_name, product.product_image, id]
     );
     return updateProduct;
    } catch(e){
        return e
    }
};


const deleteProduct = async (id) => {
    try {
      
        const deleteProduct = await db.one(
            "DELETE FROM product WHERE id=$1 RETURNING *", id
        );
        return deleteProduct;
    } catch (e){
        return e;
    }
};

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct

};