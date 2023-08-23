const db = require("../db/dbConfig.js");

// get all Stores
const getAllStores = async () => {
  try {
    const allStores = await db.any("SELECT * FROM store ORDER BY store_id");
    return allStores;
  } catch (error) {
    throw error;
  }
};

// get one Store
const getOneStore = async (id) => {
  try {
    const oneStore = await db.oneOrNone(
      "SELECT * FROM store WHERE store_id = $1",
      id
    );
    return { result: oneStore };
  } catch (error) {
    throw { error };
  }
};

module.exports = {
  getAllStores,
  getOneStore,
};
