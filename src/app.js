const express = require("express");
const morgan = require("morgan");
const app = express();

//Set Middleware
app.use(express.json());
app.use(morgan("tiny"));

module.exports = app;
