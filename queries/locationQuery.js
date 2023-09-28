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

// get stores within user distance and zipcode
const getStoresWithinDistance = async (zipCode, distance) => {
  const query = `
      SELECT subquery.*, 
             subquery.distance
      FROM (
          SELECT s.*, 
                 3959 * acos(cos(radians(l.location_latitude)) * cos(radians(s.store_latitude)) * 
                 cos(radians(s.store_longitude) - radians(l.location_longitude)) + sin(radians(l.location_latitude)) * 
                 sin(radians(s.store_latitude))) AS distance
          FROM store s
          ORDER BY distance
          JOIN location l ON s.store_zipCode = l.location_zipCode
          WHERE l.location_zipCode = $1
      ) AS subquery
      WHERE subquery.distance <= $2;
    `;

  try {
    const result = await db.manyOrNone(query, [zipCode, distance]);
    return result;
  } catch (error) {
    throw new Error("Error fetching stores within distance: " + error.message);
  }
};

module.exports = {
  getAllLocations,
  getLocationByZipCode,
  getStoresWithinDistance,
};
