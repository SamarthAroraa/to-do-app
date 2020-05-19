const Task = require("../models/task");
const express = require("express");
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Controller for displaying the home page
module.exports.home = function (req, res) {
  Task.find({}, function (err, tasks) {
    if (err) {
      console.log("Error Extracting tasks");
      return;
    } else {
      return res.render("home", {
        task_list: tasks,
      });
    }
  });
};

//controller for handling task creation request
module.exports.create = function (req, res) {
  let description = req.query.description;
  let due = req.query.due;
  let category = req.query.category;
  console.log("req.body", req.body);
  Task.create(req.body, function (err, newtask) {
    if (err) {
      console.log("Error creating new task.");
      return;
    } else {
      console.log(newtask);
      return res.redirect("back");
    }
  });
};

//controller for striking off a task
module.exports.strikeOne = function (req, res) {
  let id = req.params.id;
  console.log("**************", id);
  Task.findByIdAndDelete(id, function (err) {
    if (err) {
      console.log("Error in deleting task");
      return;
    }
    return res.redirect("back");
  });
};

//controller for clearing out all tasks
module.exports.deleteAll = function (req, res) {
  Task.remove({}, function (err) {
    if (err) {
      console.log("Error clearing out the tasks.");
      return;
    }
    return res.redirect("back");
  });
};
