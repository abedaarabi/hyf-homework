const express = require("express");
const router = express.Router();
//Meals
const dataM = require("./meal.json");

router.get("/meal", function(req, res) {
  res.send(dataM);
});

//Restrunt
const dataR = require("./reservations.json");

router.get("/reservations", function(req, res) {
  res.send(dataR);
});

module.exports = router;
