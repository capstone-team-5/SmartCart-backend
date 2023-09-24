const express = require("express");
const search = express.Router();
const { searchAllProducts } = require("../queries/productQuery.js");

// Search By 
// search?category=food&searchTerm=apple
search.get("/", async (req, res) => {
  const { category, searchTerm } = req.query;
  const allProducts = await searchAllProducts();
  if (allProducts[0]) {
    res.status(200).json(allProducts);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = search;
