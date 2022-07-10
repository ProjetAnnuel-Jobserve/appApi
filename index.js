const express = require('express');
const mongoose = require('mongoose');
const Router = require("./routes/routes")
const EventRouter = require("./routes/event-route")
const CompanyRouter = require("./routes/company-route")
const UserRouter = require("./routes/user-route")

const app = express()

// Middleware
app.use(express.json())

const username = "jobserve";
const password = "jobserve";
const cluster = "projetannuel.ayeu5";
const dbname = "JobserveDB";

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);
app.use(EventRouter);
app.use(CompanyRouter);
app.use(UserRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log("Serveur à l'écoute")
})