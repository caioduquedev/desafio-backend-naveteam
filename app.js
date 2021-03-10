const express = require("express");
const app = express();
const naversRoute = require('./routes/navers');

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api", naversRoute);






module.exports = app;
