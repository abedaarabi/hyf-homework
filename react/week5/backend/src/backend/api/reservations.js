const express = require("express");
const knex = require("../database");
const reservationsRouter = express.Router();

/** Get Request **/
reservationsRouter.get("/", async (req, res) => {
  try {
    let data;
    if (req.query.id) {
      data = await knex("meal").where({
        id: req.query.id,
      });
    } else {
      data = await knex("meal");
    }

    data.length == 0
      ? res.send(`<h1 style = color:red> Reservations not Founded </h1>`)
      : console.log(data);
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

/** Put Request **/
reservationsRouter.put("/", async (req, res) => {
  try {
    const boolean = Boolean(req.body.reservations);
    const data = await knex("meal")
      .where({ id: req.body.id })
      .update({ reservations: boolean });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

/** Delete Request **/
reservationsRouter.delete("/", async (req, res) => {
  try {
    const data = await knex("meal").where({ id: req.query.id }).del();

    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

/** Post Request **/
reservationsRouter.post("/", async (req, res) => {
  try {
    const boolean = Boolean(req.body.reservations);
    const newReservation = await knex("meal").insert({
      id: req.body.id,
      reservations: boolean,
    });
    res.json(newReservation);
  } catch (error) {
    console.log(error);
  }
});
module.exports = reservationsRouter;
