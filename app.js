var express = require ("express");
var path = require("path")
var server = express();
var bodyParser = require("body-parser");

const PORT = 8080;


var reservations = [];
//middleware
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use("/static", express.static(path.join(__dirname, "./js")));

//routes
server.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/index.html"));
});
server.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "/reservation.html"));
});
server.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "/tables.html"));
});
server.get("/api/tables", function(req, res){
    res.json(reservations);
});
server.post("/api/reserve/:reservation", function(req, res){
    var reservation = req.params.reservation;
    console.log(reservation)
    reservations.push(reservation);
});

//initialize server
server.listen(PORT, function(){
    console.log("Listening on port " + PORT);
});
