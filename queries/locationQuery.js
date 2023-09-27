const db = require("../db/dbConfig.js");

// get all Locations
const getAllLocations = async () => {
  try {
    const allLocations = await db.any(
      "SELECT * FROM location ORDER BY location_id"
    );
    return allLocations;
  } catch (error) {
    throw error;
  }
};

// get one Location
const getLocationByZipCode = async (zipCode) => {
  try {
    const location = await db.oneOrNone(
      "SELECT * FROM location WHERE location_zipCode = $1",
      zipCode
    );
    return { result: location };
  } catch (error) {
    throw { error };
  }
};

module.exports = {
  getAllLocations,
  getLocationByZipCode,
};
