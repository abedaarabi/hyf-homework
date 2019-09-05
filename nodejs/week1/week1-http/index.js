// const http = require("http");
// const server = http.createServer((req, res) => {
//   const { url, method } = req;
//   //   const url = req.url
//   console.log(req.path);
//   console.log(req.url);

//   if (url === "/add") {
//     res.end("www.google.com");
//   } else {
//     res.end(`Hello!  ${url}`);
//   }
// });
// server.listen(3000);

// const cat = require("faker");
// console.log(cat());

//
// app.get("/", function(req, res) {
//   console.log("Someone made a request");

//   res.send("Hi there  ");
// });
// //
// app.get("/bye", function(req, res) {
//   console.log("Someone made a request");

//   res.send("./data ");
// });
// //
// app.get("/r/:subredditNmae", function(req, res) {
//   const sub = req.params.subredditNmae;

//   res.send("Welcome to the " + sub.param + " Subreddit");
// });
// //
// app.get("/fallin/:thing", function(req, res) {
//   const subThing = req.params.thing;
//   res.send("Welcome to the " + subThing + " Subreddit");
// });
// //
// app.get("/r/:subredditNmae/Comments/:id/:title", function(req, res) {
//   const val1 = req.params.id;
//   res.send("WELCOME TO THE COMMENnTS PAGE!" + " " + "the id was " + val1);
// });
// //

/**----------------------HOME WORK------------------- */

const express = require("express");

const app = express();

const apiRouter = require("./dataRouter");

app.use("/api", apiRouter);

app.get("*", function(req, res) {
  console.log(req.param);

  res.send("out of service ");
});

app.listen(3000, function() {
  console.log("Server has been requested");
});
