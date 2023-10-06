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
    return { result: newFavorite };
  } catch (error) {
    throw error;
  }
};

// delete Favorite

const deleteOneFavorite = async (userId, productId) => {
  try {
    const parsedProductId = parseInt(productId, 10); // Parse productId as an integer

    const deleteFavorite = await db.one(
      "DELETE FROM favorite WHERE shopper_firebase_uid = $1 AND product_id = $2 RETURNING *",
      [userId, parsedProductId]
    );

    return deleteFavorite;
  } catch (error) {
    throw { error };
  }
};

module.exports = {
  getFavoritesByShopperId,
  addOneFavorite,
  deleteOneFavorite,
};
