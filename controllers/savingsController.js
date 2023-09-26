const express = require("express");
const saving = express.Router();

const {
  getAllSavings,
  getSavingsByShopperId,
  addOneSaving,
  updateOneSaving,
} = require("../queries/savingsQuery.js");

// INDEX - show all Savings

saving.get("/", async (request, response) => {
  const allSavings = await getAllSavings();
  if (allSavings[0]) {
    response.status(200).json(allSavings);
  } else {
    response.status(500).json({ error: "Server Error" });
  }
});

// Show one Saving by id

saving.get("/:shopperId", async (request, response) => {
  const { shopperId } = request.params;
  const { error, result } = await getSavingsByShopperId(shopperId);
  if (error?.code === 0) {
    response.status(404).json({ error: "Saving Not Found" });
  } else if (error) {
    response.status(500).json({ error: "Server Error" });
  } else {
    response.status(200).json(result);
  }
});

// Add one Saving

saving.post("/", async (request, response) => {
  const { error, result } = await addOneSaving(request.body);
  if (error) {
    response.status(500).json({ error: "Server Error" });
  } else {
    response.status(201).json(result);
  }
});

// Update one Saving

saving.put("/:id", async (request, response) => {
  const { id } = request.params;
  const { error, result } = await updateOneSaving(id, request.body);
  if (error) {
    response.status(500).json({ error: "Server Error - Could not update" });
  } else {
    response.status(200).json({ result });
  }
});

module.exports = saving;
