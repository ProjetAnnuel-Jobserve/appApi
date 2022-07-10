const express = require("express");
const companyModel = require("../models/company");
const app = express();

app.post("/companys", async (request, response) => {
  const company = new companyModel(request.body);

  try {
    await company.save();
    response.send(company);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/companys", async (request, response) => {
  const companys = await companyModel.find({});

  try {
    response.send(companys);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/companys/:id", async (request, response) => {
  const company = await companyModel.findById(request.params.id);

  try {
    response.send(company);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/companys/name/:name", async (request, response) => {
  const company = await companyModel.findOne({ name: request.params.name })

  try {
    response.send(company);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.delete("/companys/:id", async (request, response) => {
  const company = await companyModel.deleteOne({ _id: request.params.id });

  try {
    response.send(company);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.put("/companys/", async (request, response) => {
  let company = await companyModel.findByIdAndUpdate(request.body._id, request.body, { new: true });

  try {
    response.send(company);
  } catch (error) {
    response.status(500).send(error);
  }
});



module.exports = app;