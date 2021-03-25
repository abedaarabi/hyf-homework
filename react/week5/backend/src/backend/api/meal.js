const express = require("express");
const knex = require("../database");
const mealRouter = express.Router();

/** Get Request **/
mealRouter.get("/meals", async (request, response) => {
  try {
    const data = await knex("meal");

    response.json(data);
  } catch (error) {
    console.log(error);
  }
});

/** Get Request **/
// mealRouter.get("/", async (req, res) => {
//   try {
//     let data;
//     if (req.query.id) {
//       data = await knex("meal").where({
//         id: req.query.id,
//       });
//     } else {
//       data = await knex("meal");
//     }
//     data.length == 0
//       ? res.send(`<h1 style = color:red> Meal not Founded </h1>`)
//       : console.log(data);
//     res.json(data);
//   } catch (error) {
//     console.log(error);
//   }
// });

/** Put Request **/
mealRouter.put("/", async (req, res) => {
  try {
    const data = await knex("meal")
      .where({ id: req.query.id })
      .update({ price: req.query.price });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

/** Delete Request **/
mealRouter.delete("/deletemeal", async (req, res) => {
  try {
    const data = await knex("meal").where({ id: req.query.id }).del();

    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

/** Post Request **/
mealRouter.post("/meal", async (req, res) => {
  try {
    const newConcert = await knex("meal").insert({
      id: req.body.id,
      title: req.body.title,
      reviews: req.body.reviews,
      limit: req.body.limit,
      created_date: req.body.created_date,
      // reservations: req.body.reservations,
      price: req.body.price,
    });
    res.json(newConcert);
  } catch (error) {
    console.log(error);
  }
});
module.exports = mealRouter;
