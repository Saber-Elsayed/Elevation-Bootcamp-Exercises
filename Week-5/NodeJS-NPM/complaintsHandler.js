const complaint = require("./consts");
console.log(complaint);
const handleComplaints = function (complaint) {
  if (complaint === "finance") {
    console.log("Money doesn’t grow on trees, you know");
  }
  if (complaint === "weather") {
    console.log("It is the way of nature. Not much to be done.");
  }
  if (complaint === "emotions") {
    console.log("It’ll pass, as all things do, with time.");
  }
};
