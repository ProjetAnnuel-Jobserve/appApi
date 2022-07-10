const express = require("express");
const eventModel = require("../models/event");
const app = express();

app.post("/events", async (request, response) => {
  const event = new eventModel(request.body);

  try {
    await event.save();
    response.send(event);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/events", async (request, response) => {
  const events = await eventModel.find({});

  try {
    response.send(events);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/events/:id", async (request, response) => {
  const event = await eventModel.findById(request.params.id);

  try {
    response.send(event);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/events/status/:status", async (request, response) => {
  const events = await eventModel.find({ status: request.params.status })

  try {
    response.send(events);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/events/name/:name", async (request, response) => {
  const event = await eventModel.findOne({ name: request.params.name })

  try {
    response.send(event);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.delete("/events/:id", async (request, response) => {
  const event = await eventModel.deleteOne({ _id: request.params.id });

  try {
    response.send(event);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.put("/events/", async (request, response) => {
  let event = await eventModel.findByIdAndUpdate(request.body._id, request.body, { new: true });

  try {
    response.send(event);
  } catch (error) {
    response.status(500).send(error);
  }
});



module.exports = app;