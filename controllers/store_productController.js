const express = require("express");
const comparePrices = express.Router();
const { getComparisonResults } = require("../queries/store_productQuery");

// Compare product with all stores

comparePrices.get("/", async (req, res) => {
  const { productIds } = req.query;
  const productArray = productIds.split(",");
  const stores = {}; // This object will store the results by store

  try {
    // Fetch results for all products in a single query - optimized code
    const results = await getComparisonResults(productArray);

    for (const result of results) {
      const { store_id, product_id, product_price } = result;

      // Create a store entry if it doesn't exist
      if (!stores[store_id]) {
        stores[store_id] = {};
      }

      // Use the product ID as the key in the store's entry
      stores[store_id][product_id] = product_price;
    }

    // Calculate the total for each store
    for (const storeId in stores) {
      const store = stores[storeId];
      store.total = Object.values(store).reduce((acc, price) => acc + price, 0);
    }

    // Convert stores object to an array and sort by total price (low to high)
    const sortedStores = Object.entries(stores).sort(
      ([storeIdA, storeA], [storeIdB, storeB]) => storeA.total - storeB.total
    );

    // Construct a new object with sorted stores
    const sortedStoresObject = {};
    sortedStores.forEach(([storeId, store]) => {
      sortedStoresObject[storeId] = store;
    });

    res.status(200).json({ stores: sortedStoresObject });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = comparePrices;
