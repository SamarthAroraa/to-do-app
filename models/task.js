//calling an instance of mongoose
const mongoose = require("mongoose");
//defining the new Schema for every task added
//Desciption must be added while due date and category are optional fields
const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  due: {
    type: Date,
  },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
