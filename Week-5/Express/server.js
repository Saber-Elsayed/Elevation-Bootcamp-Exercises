// const express = require("constants");
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const data = {
  8112: {
    title: "Name of the Wind",
    author: "Patrick Rothfuss",
  },
  9121: {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
  },
  1081: {
    title: "The Giver",
    author: "Lois Lowry",
  },
};

app.get("/books/:booksID", function (request, response) {
  const id = request.params["booksID"];
  response.send(JSON.stringify(data[id]));
});

app.use(express.static(path.join(__dirname, "Books")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});

// const users = {
//   tilda: "You've done a wonderful job",
//   riva: "You need to improve your form, but good perseverance",
//   jeremy: "You're incredible",
// };
// app.get("/users/:userID", function (request, response) {
//   response.send(users[request.params.userID]);
// });
// app.use(express.static(path.join(__dirname, "dist")));

// app.listen(port, function () {
//   console.log(`Running server on port ${port}`);
// });

// app.get("/", function (request, response) {
//   console.log("Someone has come into the server. Brace yourselves.");
//   response.send("Ending the cycle, thanks for visiting");
// });

// app.get("/maps", function (request, response) {
//   response.send("Here's some stuff related to maps");
// });

// app.get("/shoobi", function (request, response) {
//   response.send("This here is the shoobi *route*");
// });

// app.get("/life", function (request, response) {
//   response.send("42");
// });

// app.get("/landing/:username", function (request, response) {
//   response.send(`Hi there, ${request.params.username}`);
// });

// app.get("/routeWithOptionalParameters", (request, response) => {
//   let params = request.query;
//   response.send(params);
// });

// app.get("/details", (request, response) => {
//   const { zipcode, city, middleName } = request.query;
//   console.log("City:", city);

//   response.json({
//     zipcode,
//     city,
//     middleName,
//   });
// });
