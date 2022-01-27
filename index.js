// [x] initialize and configure Express app
// [x] apply initialize templating library
// [x] create home controller
// [x] bind routing
// [x] create layout
// [ ] create data service
// [ ] implement controllers

const express = require("express");
const hbs = require("express-handlebars");

const carsService = require("./services/cars");

const { about } = require("./controllers/about");
const { create } = require("./controllers/create");
const { details } = require("./controllers/details");
const { home } = require("./controllers/home");
const { notFound } = require("./controllers/notFound");

const app = express();

app.engine(
  "hbs",
  hbs.create({
    extname: ".hbs",
  }).engine
);

app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static("static"));
app.use(carsService());

app.get("/", home);
app.get("/about", about);
app.get("/create", create);
app.get("/details/:id", details);
app.all("*", notFound);

app.listen(3000, () => console.log("Server started on port 3000"));
