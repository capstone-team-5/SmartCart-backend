const express = require("express");
const shopper = express.Router();

const validateShopper = require("../validations/validateShopper.js");

const {
  getOneShopper,
  addOneShopper,
  updateOneShopper,
  deleteOneShopper,
} = require("../queries/shopperQuery.js");

// Show one shopper by id

shopper.get("/:id", async (request, response) => {
  const { id } = request.params;
  console.log("Controller ID:", id);
  const { error, result } = await getOneShopper(id);
  console.log("Error:", error);
  console.log("Result:", result);
  if (error?.code === 0) {
    response.status(404).json({ error: "Shopper Not Found" });
  } else if (error) {
    response.status(500).json({ error: "Server Error" });
  } else {
    response.status(200).json(result);
  }
});

// Add one Shopper

shopper.post("/", validateShopper, async (request, response) => {
  const { error, result } = await addOneShopper(request.body);
  if (error) {
    response.status(500).json({ error: "Server Error" });
  } else {
    response.status(201).json(result);
  }
});

// Update one Shopper

shopper.put("/:id", validateShopper, async (request, response) => {
  const { id } = request.params;
  const { error, result } = await updateOneShopper(id, request.body);
  if (error) {
    response.status(500).json({ error: "Server Error - Could not update" });
  } else {
    response.status(200).json({ result });
  }
});

// Delete one Shopper

shopper.delete("/:id", async (request, response) => {
  const { id } = request.params;
  const { error, result } = await deleteOneShopper(id);
  if (error) {
    response.status(404).json({ error: "Shopper Not Found" });
  } else {
    response.status(200).json(result);
  }
});

module.exports = shopper;
