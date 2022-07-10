const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    dateEnded: {
      type: String,
    },
    idStatus: {
      type: Number,
      required: true,
      default: 0
    }
  }
);

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;