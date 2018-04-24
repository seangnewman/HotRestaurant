$(document).ready(function(){
    $.ajax({
        url: "/api/tables",
        method: "GET"
    }).done(function(res){
        for(var i = 0; i < res.length; i++){

        }
        res.forEach(function(reservation){
            if(reservation.seated == true){
                $("#tableSection").append();
            }else{

            }
        });
    });
});