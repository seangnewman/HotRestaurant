var express = require ("express");
var path = require("path")
var server = express();
var bodyParser = require("body-parser");

const PORT = 8080;


var reservations = [
    {
        name: "dummy",
        email: "email@email.com",
        phone: "4444444444",
        id: "-1",
        seated: true
    }
];
//middleware
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use("/static", express.static(path.join(__dirname, "/js")));

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
    var output = [];
    reservations.forEach(function(reservation){
        if(reservation.seated){
            output.push(reservation);
        }
    });
    res.json(output);
});
server.get("/api/waitlist", function(req, res){
    var output = [];
    reservations.forEach(function(reservation){
        if(!reservation.seated){
            output.push(reservation);
        }
    });
    res.json(output);
});
server.post("/api/reserve/:reservation", function(req, res){
    var reservation = req.params.reservation;
    console.log(reservation);
    if(reservations.length > 5){
        reservation.seated = false;
    }else{
        reservation.seated = true;
    }
    reservations.push(reservation);
});
server.post("/api/clear", function(req, res){
    reservations = [];
});

//initialize server
server.listen(PORT, function(){
    console.log("Listening on port " + PORT);
});
