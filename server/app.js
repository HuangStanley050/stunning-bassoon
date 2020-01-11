const express = require("express");
const path = require("path");

const app = express();
const authRouter = require("./routes/authRoutes");

app.use(express.static(path.join(__dirname, "../client/build")));
// app.get("/", (req, res) => res.send("Index route"));
app.get("/hello", (req, res) => res.send("hello there"));
app.use(authRouter);
// this is comment
app.get("*", (req, res) => {
  res.sendFile(path.join(`${__dirname}../client/build/index.html`));
});

module.exports = app;
