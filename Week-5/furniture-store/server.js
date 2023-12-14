const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const store = [
  { name: "table", inventory: 3, price: 800 },
  { name: "chair", inventory: 16, price: 120 },
  { name: "couch", inventory: 1, price: 1200 },
  { name: "picture frame", inventory: 31, price: 70 },
];
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
app.get("/priceCheck/:name", function (request, response) {
  const itemName = request.params.name;
  let foundItem = 0;
  for (let i = 0; i < store.length; i++) {
    if (store[i].name === itemName) {
      let foundItem = store[i];
      break; // Exit the loop if the item is found
    }
  }
  console.log(foundItem);

  response.send(JSON.stringify(foundItem));
});
