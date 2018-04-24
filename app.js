
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
    res.sendFile("./index.html");
});
server.get("/reservation", function(req, res){
    res.sendFile("./reservation.html");
});
server.get("/make", function(req, res){
    res.sendFile("./tables.html");
});
server.get("/api/tables", function(req, res){
    res.json(reservations);
});
server.post("/api/reserve/:reservation", function(req, res){
    var reservation = req.params.reservation;
    reservations.push(reservation);
});

//
server.listen(PORT, function(){
    console.log("Listening on port " + PORT);
});
