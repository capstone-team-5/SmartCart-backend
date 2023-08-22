// Dependencies
const express = require("express");
const cors = require("cors");
const productControllers = require("./controllers/productController");

//Configurations
const app = express();

//Middleware
app.use(cors());

app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("Welcome to $mrtCART");
});

// app.use("/products",productControllers);

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

module.exports = app;
