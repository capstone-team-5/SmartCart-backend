const db = require("../db/dbConfig.js");

// get one Favorite
const getFavoritesByShopperId = async (shopperId) => {
  try {
    const favorites = await db.manyOrNone(
      "SELECT * FROM favorite WHERE shopper_firebase_uid = $1",
      shopperId
    );
    return { result: favorites };
  } catch (error) {
    console.log(error);
    throw { error };
  }
};

// add new Favorite

const addOneFavorite = async (favorite) => {
  try {
    const newFavorite = await db.one(
      "INSERT INTO favorite (shopper_firebase_uid, product_id) VALUES ($1, $2) RETURNING *",
      [favorite.shopper_firebase_uid, favorite.product_id]
    );
    console.log("newFavorite:", newFavorite);
    return { result: newFavorite };
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

// delete Favorite

const deleteOneFavorite = async (userId, productId) => {
  try {
    const parsedProductId = parseInt(productId, 10); // Parse productId as an integer

    const deleteFavorite = await db.one(
      "DELETE FROM favorite WHERE shopper_firebase_uid = $1 AND product_id = $2 RETURNING *",
      [userId, productId]
    );
    return deleteFavorite;
  } catch (error) {
    console.log(error);
    throw { error };
  }
};

module.exports = {
  getFavoritesByShopperId,
  addOneFavorite,
  deleteOneFavorite,
};
