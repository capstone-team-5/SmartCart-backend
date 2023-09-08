const express = require("express");
const comparePrices = express.Router();
const { getComparisonResults } = require("../queries/store_productQuery");

// Compare product with all stores

comparePrices.get("/", async (req, res) => {
  const { productIds } = req.query;
  const product = productIds.split(",");

  const comparisonResults = await getComparisonResults(product);

  if (comparisonResults.length > 0) {
    res.status(200).json({ comparisonResults });
  } else {
    res.status(404).json({ error: "No results found" });
  }
});

module.exports = comparePrices;
