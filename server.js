// PACKAGES
const express = require("express");
const bodyParser = require("body-parser");

// BOILERPLATE
const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.set("view engine", "ejs");
app.use(express.static("./public"));

// // ROUTING
const views = require("./routes/views");
app.get("/", views.index);
app.get("/about", views.about);
console.log(views);

app.post("/api/simpleRequest", function (req, res) {
  console.log(req.body);
  return res.status(200).json({
    message: "Hello " + req.body.name,
    joke: "you suck!",
  });
});

var startServer = (function () {
  app.listen(8080, (err) => {
    if (err) return console.log("Error running server");
    console.log("App listen on port: 8080");
  });
})();
