// dependencies
const express = require('express');
const cors = require('cors');

//configurations
const app = express();
//middleware
const cors = require('cors');

app.use(cors())

app.use(express.json());

//routes
app.get("/" , (req, res) => {
    res.send("$mrtCart");
});

app.get("*", (req, res) => {
    res.status(404).send("404, Page not found");
});

module.exports = app;

