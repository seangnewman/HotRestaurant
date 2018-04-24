$(document).ready(function(){
    $.ajax({
        url: "/api/tables",
        method: "GET"
    }).done(function(res){
        res.forEach(function(reservation){
            if(reservation.seated == true){
                
            }else{

            }
        });
    });
});