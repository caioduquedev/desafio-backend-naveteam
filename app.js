const express = require("express");
const app = express();
const naversRoute = require("./routes/navers");
const projectsRouter = require("./routes/projects");

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", naversRoute);
app.use("/api", projectsRouter);

module.exports = app;
