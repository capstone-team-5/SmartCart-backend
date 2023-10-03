const express = require("express");
const location = express.Router();

const {
  getAllLocations,
  getLocationByZipCode,
  getLocationByCoordinates,
  getStoresWithinDistance,
  getStoresWithinDistanceByCoordinates,
} = require("../queries/locationQuery.js");

// INDEX - show all locations

location.get("/", async (request, response) => {
  const allLocations = await getAllLocations();
  if (allLocations[0]) {
    response.status(200).json(allLocations);
  } else {
    response.status(500).json({ error: "Server Error" });
  }
});

// Show one location by id

location.get("/:zipCode", async (request, response) => {
  const { zipCode } = request.params;
  const { error, result } = await getLocationByZipCode(zipCode);

  if (error?.code === 0) {
    response.status(404).json({ error: "Location Not Found" });
  } else if (error) {
    response.status(500).json({ error: "Server Error" });
  } else {
    response.status(200).json(result);
  }
});

// show name, zipcode by latitude and longitude

location.get("/:latitude/:longitude", async (request, response) => {
  const { latitude, longitude } = request.params;
  const { error, result } = await getLocationByCoordinates(latitude, longitude);

  if (error?.code === 0) {
    response.status(404).json({ error: "Location Not Found" });
  } else if (error) {
    response.status(500).json({ error: "Server Error" });
  } else {
    response.status(200).json(result);
  }
});

// get stores within user distance and zipcode

location.get("/:zipCode/:distance", async (request, response) => {
  const { zipCode, distance } = request.params;
  try {
    const stores = await getStoresWithinDistance(zipCode, distance);
    response.json(stores);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

// get stores within user distance based on latitude, longitude, and distance
location.get(
  "/stores/:latitude/:longitude/:distance",
  async (request, response) => {
    const { latitude, longitude, distance } = request.params;
    try {
      const stores = await getStoresWithinDistanceByCoordinates(
        latitude,
        longitude,
        distance
      );
      response.json(stores);
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  }
);

module.exports = location;
