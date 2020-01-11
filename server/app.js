const express = require("express");
const app = express();
const authRouter = require("./routes/authRoutes");

app.use(express.static(__dirname + "../client/build"));
app.get("/", (req, res) => res.send("Index route"));
app.get("/hello", (req, res) => res.send("hello there"));

app.use(authRouter);
app.use("/react", (req, res) => {
  res.sendFile(path.join(__dirname + "../client/build/index.html"));
});

module.exports = app;
