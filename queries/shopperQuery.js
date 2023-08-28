const db = require("../db/dbConfig.js");

// get one shopper
const getOneShopper = async (id) => {
  try {
    const oneShopper = await db.oneOrNone(
      "SELECT * FROM shopper WHERE shopper_firebase_uid = $/id/",
      { id }
    );
    return { result: oneShopper };
  } catch (error) {
    throw { error };
  }
};

// add new shopper
const addOneShopper = async (shopper) => {
  try {
    const newShopper = await db.one(
      "INSERT INTO shopper (shopper_firebase_uid, shopper_email, shopper_first_name, shopper_last_name, shopper_instagram_link, shopper_facebook_link, shopper_dietary_preferences) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        shopper.shopper_firebase_uid,
        shopper.shopper_email,
        shopper.shopper_first_name,
        shopper.shopper_last_name,
        shopper.shopper_instagram_link,
        shopper.shopper_facebook_link,
        shopper.shopper_dietary_preferences,
      ]
    );
    return { result: newShopper };
  } catch (error) {
    throw { error };
  }
};

// update shopper
const updateOneShopper = async (id, shopper) => {
  try {
    const updateShopper = await db.one(
      "UPDATE shopper SET shopper_first_name=$1, shopper_last_name=$2, shopper_instagram_link=$3, shopper_facebook_link=$4, shopper_dietary_preferences=$5 WHERE shopper_firebase_uid=$6 RETURNING *",
      [
        shopper.shopper_first_name,
        shopper.shopper_last_name,
        shopper.shopper_instagram_link,
        shopper.shopper_facebook_link,
        shopper.shopper_dietary_preferences,
        id,
      ]
    );
    return { result: updateShopper };
  } catch (error) {
    throw { error };
  }
};

// delete Shopper
const deleteOneShopper = async (id) => {
  try {
    const deleteShopper = await db.one(
      "DELETE FROM shopper WHERE shopper_firebase_uid=$1 RETURNING *",
      id
    );
    return deleteShopper;
  } catch (error) {
    throw { error };
  }
};

module.exports = {
  getOneShopper,
  addOneShopper,
  updateOneShopper,
  deleteOneShopper,
};
