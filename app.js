// Dependencies
const express = require("express");
const cors = require("cors");
const productController = require("./controllers/productController");
const reviewController = require("./controllers/reviewController");
const storeController = require("./controllers/storeController");
const userController = require("./controllers/userController");
const favoriteController = require("./controllers/favoriteController");

//Configurations
const app = express();

//Middleware
app.use(cors());

app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("Welcome to $mrtCART");
});

app.use("/products", productController);
app.use("/reviews", reviewController);
app.use("/stores", storeController);
app.use("/users", userController);
app.use("/favorites", favoriteController);

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

module.exports = app;
