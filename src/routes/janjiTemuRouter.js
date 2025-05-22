const express = require("express");
const { createJanji } = require("../controllers/JanjiTemuController");
const janjiTemuRouter = express.Router();

janjiTemuRouter.post("/add", createJanji)

module.exports = janjiTemuRouter