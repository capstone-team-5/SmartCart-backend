const express = require("express");
const product = express.Router();
const { getAllProducts, getOneProduct } = require("../queries/productQuery.js");

// INDEX - show all products

product.get("/products", async (req, res) => {
  const allProducts = await getAllProducts();
  if (allProducts[0]) {
    res.status(200).json(allProducts);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

// Show one image by id

product.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const { error, result } = await getOneProduct(id);
  if (error?.code === 0) {
    res.status(404).json({ error: "Product Not Found" });
  } else if (error) {
    res.status(500).json({ error: "Server Error" });
  } else {
    res.status(200).json(result);
  }
});

module.exports = product;
