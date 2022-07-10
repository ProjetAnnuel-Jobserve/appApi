const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    siretNumber: {
        type: String,
    },
    capacity: {
        type: Number,
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    zipcode: {
        type: Array
    },
  }
);

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;