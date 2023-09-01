const express = require("express");
const comparePrices = express.Router();
const { getComparisonResults } = require("../queries/product_storeQuery");

// Compare product with all stores

comparePrices.get("/", async (req, res) => {
  const { products } = req.query;
  const productNames = products.split(",");

  const comparisonResults = await getComparisonResults(productNames);

  if (comparisonResults.length > 0) {
    res.status(200).json(comparisonResults);
  } else {
    res.status(404).json({ error: "No results found" });
  }
});

module.exports = comparePrices;
