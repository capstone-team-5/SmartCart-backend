const express = require("express");
const favorite = express.Router();

const validateFavorite = require("../validations/validateFavorite.js");

const {
  getFavoritesByShopperId,
  addOneFavorite,
  deleteOneFavorite,
} = require("../queries/favoriteQuery");

// Show one favorite by id

favorite.get("/:shopperId", async (request, response) => {
  const { shopperId } = request.params;
  const { error, result } = await getFavoritesByShopperId(shopperId);
  if (error?.code === 0) {
    response.status(404).json({ error: "Favorite Not Found" });
  } else if (error) {
    response.status(500).json({ error: "Server Error" });
  } else {
    response.status(200).json(result);
  }
});

// Add one favorite

favorite.post("/", validateFavorite, async (request, response) => {
  const { error, result } = await addOneFavorite(request.body);
  if (error) {
    response.status(500).json({ error: "Server Error" });
  } else {
    response.status(201).json(result);
  }
});

// Delete one favorite

favorite.delete("/:userId/:productId", async (request, response) => {
  const { userId, productId } = request.params;
  const { error, result } = await deleteOneFavorite(userId, Number(productId));
  if (error) {
    response.status(404).json({ error: "Favorite Not Found" });
  } else {
    response.status(200).json(result);
  }
});

module.exports = favorite;
