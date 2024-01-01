// Server setup
const express = require("express");
const app = express();

// Mongoose setup
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose
  .connect("mongodb://127.0.0.1:27017/peopleDB", {
    useNewUrlParser: true,
  })
  .catch((err) => console.log(err));
// Schema/model setup
const personSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: String,
  age: Number,
});
const Person = mongoose.model("person", personSchema);

//Routes
app.get("/people", function (req, res) {
  Person.find({}).then(function (people) {
    res.send(people);
  });
});

const port = 4200;
app.listen(port, function () {
  console.log(`Running on port ${port}`);
});
