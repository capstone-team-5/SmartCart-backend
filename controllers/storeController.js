const express = require("express");
const store = express.Router();

const { getAllStores, getOneStore } = require("../queries/storeQuery.js");

// INDEX - show all stores

store.get("/", async (request, response) => {
  const allStores = await getAllStores();
  if (allStores[0]) {
    response.status(200).json(allStores);
  } else {
    response.status(500).json({ error: "Server Error" });
  }
});

// Show one store by id

store.get("/:id", async (request, response) => {
  const { id } = request.params;
  const { error, result } = await getOneStore(id);

  if (error?.code === 0) {
    response.status(404).json({ error: "Store Not Found" });
  } else if (error) {
    response.status(500).json({ error: "Server Error" });
  } else {
    response.status(200).json(result);
  }
});

module.exports = store;
