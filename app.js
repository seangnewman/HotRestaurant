
var express = require ("express");
var path = require("path")
var server = express();
var bodyParser = require("body-parser");


var reservations = [];
//middleware
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use("/static", express.static(path.join(__dirname, "./js")));

//routes
server.get("/home", function(req, res){

});
server.get("/view", function(req, res){

});
server.get("/make", function(req, res){

});
server.get("/api/tables", function(req, res){
    res.json(reservations);
});
server.post("/api/reserve/:reservation", function(req, res){
    var reservation = req.params.reservation;
    reservations.push(reservation);
});

//
