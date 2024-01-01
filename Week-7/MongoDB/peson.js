const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/peopleDB", { useNewUrlParser: true })
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const personSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
});
