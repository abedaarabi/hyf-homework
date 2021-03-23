require("dotenv").config();

// const knex = require("knex")({
//   client: "mysql2",
//   connection: {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//   },
//   pool: { min: 0, max: 7 },
// });

const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "password",
    database: "meal",
  },
});
// Check that the connection works
knex.raw("SELECT VERSION()").then(() => {
  console.log(`connection to db successful!`);
});

module.exports = knex;
