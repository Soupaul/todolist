const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));

let port = 3000;

let todos = [];

const weekdays = ["Monday", "tuesday", "Friday"];

app.set("view engine", "ejs");

function getday() {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  return today.toLocaleDateString("en-US", options);
}

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  const day = getday();
  res.render("list", { tasks: todos, weekday: day });
});

app.post("/", function (req, res) {
  const task = req.body.newTask;
  todos.push(task);
  res.redirect("/");
});

app.post("/delete", function (req, res) {
  const position = req.body.position;
  todos = todos.filter(function (todo, index) {
    return index != position;
  });
  res.redirect("/");
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
