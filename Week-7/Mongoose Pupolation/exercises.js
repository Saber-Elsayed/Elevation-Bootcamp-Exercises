const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/DB", {
    useNewUrlParser: true,
  })
  .catch((err) => console.log(err));
const Schema = mongoose.Schema;

const systemSchema = new Schema({
  starName: String,
  Planet: [{ type: Schema.Types.ObjectId, ref: "Planet" }],
});

const PlanetSchema = new Schema({
  name: String,
  visitors: [{ type: Schema.Types.ObjectId, ref: "visitors" }],
});

const visitorsschema = new Schema({
  name: String,
  homePlanet: { type: Schema.Types.ObjectId, ref: "Planet" },
  visitedPlanets: [{ type: Schema.Types.ObjectId, ref: "Planet" }],
});

const System = mongoose.model("system", systemSchema);
const Planet = mongoose.model("Planet", PlanetSchema);
const visitors = mongoose.model("visitors", visitorsschema);

const visitor1 = new visitors({ name: "John Doe" });
const visitor2 = new visitors({ name: "Jane Smith" });

const planet1 = new Planet({ name: "Earth", visitors: [visitor1, visitor2] });
const planet2 = new Planet({ name: "Mars", visitors: [visitor1] });

const newSystem = new System({
  starName: "Sun",
  planets: [planet1, planet2],
});

// Save the data to the database
Promise.all([
  visitor1.save(),
  visitor2.save(),
  planet1.save(),
  planet2.save(),
  newSystem.save(),
])
  .then(() => {
    console.log("Data successfully saved to the database");
  })
  .catch((error) => {
    console.error("Error saving data to the database:", error);
  })
  .finally(() => {
    mongoose.connection.close(); // Close the database connection
  });

visitors
  .findOne({ name: "John Doe" })
  .populate("visitedPlanets")
  .exec()
  .then((visitor) => {
    console.log("Visited planets for John Doe:", visitor.visitedPlanets);
  })
  .catch((err) => {
    console.error(err);
  });
