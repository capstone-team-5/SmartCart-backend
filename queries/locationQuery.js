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

// get zipcode and name from latitude and longitude coordinates
const getLocationByCoordinates = async (latitude, longitude) => {
  try {
    const lat = parseFloat(latitude);
    const long = parseFloat(longitude);
    const location = await db.any(
      "SELECT location_zipCode, location_name FROM location WHERE location_latitude - ($1::double precision) < 1 AND location_longitude - ($2::double precision) < 1",
      [lat, long]
    );
    return { result: location };
  } catch (error) {
    console.log(error);
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

// get stores within user distance and latitude and longitude
const getStoresWithinDistanceByCoordinates = async (
  userLatitude,
  userLongitude,
  distance
) => {
  const query = `
      SELECT subquery.*, 
             subquery.distance
      FROM (
          SELECT s.*, 
                 3959 * acos(cos(radians($1)) * cos(radians(s.store_latitude)) * 
                 cos(radians(s.store_longitude) - radians($2)) + sin(radians($1)) * 
                 sin(radians(s.store_latitude))) AS distance
          FROM store s
          ORDER BY distance
      ) AS subquery
      WHERE subquery.distance <= $3;
    `;

  try {
    const result = await db.manyOrNone(query, [
      userLatitude,
      userLongitude,
      distance,
    ]);
    return result;
  } catch (error) {
    throw new Error("Error fetching stores within distance: " + error.message);
  }
};
module.exports = {
  getAllLocations,
  getLocationByZipCode,
  getLocationByCoordinates,
  getStoresWithinDistance,
  getStoresWithinDistanceByCoordinates,
};
