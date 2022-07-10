const express = require("express");
const topicModel = require("../models/topic");
const app = express();

app.post("/topics", async (request, response) => {
  const topic = new topicModel(request.body);

  try {
    await topic.save();
    response.send(topic);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/topics", async (request, response) => {
  const topics = await topicModel.find({});

  try {
    response.send(topics);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/topics/:id", async (request, response) => {
  const topic = await topicModel.findById(request.params.id);

  try {
    response.send(topic);
  } catch (error) {
    response.status(500).send(error);
  }
});

/** 
app.get("/topics/accessible", async (request, response) => {
  const topics = await topicModel.find({ status: "2" || "3" })

  try {
    response.send(topics);
  } catch (error) {
    response.status(500).send(error);
  }
});
*/

app.get("/topics/status/:status", async (request, response) => {
  const topics = await topicModel.find({ status: request.params.status })

  try {
    response.send(topics);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/topics/name/:name", async (request, response) => {
  const topic = await topicModel.findOne({ name: request.params.name })

  try {
    response.send(topic);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.delete("/topics/:id", async (request, response) => {
  const topic = await topicModel.deleteOne({ _id: request.params.id });

  try {
    response.send(topic);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.put("/topics/", async (request, response) => {
  let topic = await topicModel.findByIdAndUpdate(request.body._id, request.body, { new: true });

  try {
    response.send(topic);
  } catch (error) {
    console.log("erreur update topic")
    response.status(500).send(error);
  }
});



module.exports = app;