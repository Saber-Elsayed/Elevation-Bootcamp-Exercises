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

const Person = mongoose.model("person", personSchema);

let p1 = new Person({ firstName: "David", lastName: "Smith", age: 25 }); //purposefully ignoring the `address` field
p1.save();

let peoplePromise = Person.find({});

peoplePromise
  .then(function (people) {
    console.log(people);
  })
  .catch((err) => console.log(err));

let p2 = new Person({ firstName: "Shoo", lastName: "Bert", age: 50 });
let p3 = new Person({ firstName: "Shoob", lastName: "Ert", age: 34 });
let p4 = new Person({ firstName: "Sh", lastName: "Oobert", age: 10 });
let p5 = new Person({ firstName: "Shoober", lastName: "T", age: 44 });

let allTheShooberts = [p2, p3, p4, p5];
allTheShooberts.forEach((s) => s.save());

Person.findById("6592a5381d794598e87000fb").then(function (person) {
  person.age += 100; //how time flies
  person.save();
  console.log(person);
});
