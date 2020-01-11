const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Index route"));
app.get("/hello", (req, res) => res.send("hello there"));
app.use("/api", (req, res) => res.send("api routes"));

module.exports = app;
