const express = require("express");

const meals = require("./backend/data/meals");

const app = express();
const urlTarget =
  "https://cdn.dribbble.com/users/32512/screenshots/2358285/5ntitled-1.gif";

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

app.use(function(req, res, next) {
  console.log(new Date() + "request received for path:" + req.originalUrl);
  // writeToFile(new Date().toString());
  next();
});

app.get("/meals", (req, res) => {
  const maxPrice = req.query.price;
  const title = req.query.title;
  const createdAfter = req.query.createdAfter;
  const limit = req.query.limit;
  let data = meals;
  if (maxPrice) {
    data = data.filter(meal => meal.price <= maxPrice);
    res.send(data);
  }

  if (title) {
    data = data.filter(meal => meal.title === title);
    res.send(data);
  }
  if (createdAfter) {
    data = data.filter(meal => meal.createdAt <= createdAfter);
    res.send(data);
  }
  if (limit) {
    data = data.filter(meal => meal.limit == limit);
    res.send(data);
  }
  //  else {
  //   console.log(req.params);

  //   res.send("We do no have the number ");
  // }
  //Wrong Url
  app.get("*", (req, res) => {
    console.log(req.params);

    res.send("out of service ");
  });
});

console.log(meals);

app.get("*", (req, res, next) => {
  console.log(req.params);

  res.redirect(urlTarget);
  next();
});
