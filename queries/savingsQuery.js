const db = require("../db/dbConfig.js");

// get all savings
const getAllSavings = async () => {
  try {
    const allSavings = await db.any("SELECT * FROM saving ORDER BY saving_id");
    return allSavings;
  } catch (error) {
    throw error;
  }
};

// get one Saving
const getSavingsByShopperId = async (shopperId) => {
  try {
    const savings = await db.manyOrNone(
      "SELECT * FROM saving WHERE shopper_firebase_uid = $1",
      shopperId
    );
    return { result: savings };
  } catch (error) {
    throw { error };
  }
};

// add new Saving

const addOneSaving = async (saving) => {
  try {
    const newSaving = await db.one(
      "INSERT INTO saving (shopper_firebase_uid, saving_timestamp, store_name, saving_per_trip, saving_total ) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        saving.shopper_firebase_uid,
        saving.saving_timestamp,
        saving.store_name,
        saving.saving_per_trip,
        saving.saving_total,
      ]
    );
    return { result: newSaving };
  } catch (error) {
    throw error;
  }
};

// update Saving
const updateOneSaving = async (id, saving) => {
  try {
    const updateSaving = await db.one(
      "UPDATE saving SET store_name=$1, saving_per_trip=$2, saving_total=$3 WHERE saving_id=$4 RETURNING *",
      [saving.store_name, saving.saving_per_trip, saving.saving_total, id]
    );
    return { result: updateSaving };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllSavings,
  getSavingsByShopperId,
  addOneSaving,
  updateOneSaving,
};
