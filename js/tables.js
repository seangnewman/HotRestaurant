$(document).ready(function(){
    $.ajax({
        url: "/api/tables",
        method: "GET"
    }).done(function(res){
        console.log(res);
        res.forEach(function(reservation){
            $("#tableSection").append("<div>"+reservation.name+"</div>");
        });
    });
    $.ajax({
        url: "/api/waitlist",
        method: "GET"
    }).done(function(res){
        console.log(res);
        res.forEach(function(reservation){
            $("#waitlistSection").append("<div>"+reservation.name+"</div>");
        });
    })
});