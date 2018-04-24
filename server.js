var express = require("express");
var path = require("path");
var server = express();
var bodyParser = require("body-parser");

const PORT = 8080;

var reservations = [];
//middleware
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use("/static", express.static(path.join(__dirname, "./js")));

//routes
server.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});
server.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "/reservation.html"));
});
server.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "/tables.html"));
});
server.get("/api/tables", function(req, res) {
  res.json(reservations);
});
server.post("/api/reserve/", function(req, res) {
  var reservation = req.body;
  console.log(req.body);
  if (reservations.length > 5) {
    reservation.seated = false;
  } else {
    reservation.seated = true;
  }
  reservations.push(reservation);
  res.end();
});
server.post("/api/clear", function(req, res) {
  reservations = [];
});

//initialize server
server.listen(PORT, function() {
  console.log("Listening on port " + PORT);
});
