const express = require("express");
const router = express.Router();

router.get("/api/auth", (req, res) => res.send("auth route"));

module.exports = router;
