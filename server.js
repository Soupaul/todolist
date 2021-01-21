const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));

let port = 3000;

const users = [];

const weekdays = ["Monday", "tuesday", "Friday"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("home", { name: "Mohit", dept: "CSE" });
});

app.post("/form", function (req, res) {
  console.log(req.body);
  users.push(req.body);
  console.log(users);
  res.send("Your details have been submitted");
});

app.get("/about", function (req, res) {
  res.send("<p>Welcome to About Page</p>");
});

app.get("/day", function (req, res) {
  // some calculations
  res.render("weekday", { days: weekdays });
});

app.get("/form", function (req, res) {
  res.render("form");
});

app.listen(port, function () {
  console.log(`Server started successfully at: http://localhost:${port}`);
});
