const express = require("express");
const search = express.Router();
const { searchAllProducts } = require("../queries/productQuery.js");

// INDEX - show all products

search.get("/", async (req, res) => {
  const allProducts = await searchAllProducts();
  if (allProducts[0]) {
    res.status(200).json(allProducts);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = search;
