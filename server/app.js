const express = require("express");
const app = express();
const authRouter = require("./routes/authRoutes");

app.get("/", (req, res) => res.send("Index route"));
app.get("/hello", (req, res) => res.send("hello there"));

app.use(authRouter);

module.exports = app;
