
$(function(){

    $("#formulario").submit( function(){

        

        if($("#p1").val() == ""){
            $("#label1").css("color", "red")
            $("#alertas").html("<p>Se deben rellenar Nombres y Apellidos</p>")
            event.preventDefault()
        }
        else{
            $("#label1").css("color", "black")
        }
        if($("#p2").val() == ""){
            $("#label2").css("color", "red")
            $("#alertas").html("<p>Se deben rellenar Nombres y Apellidos</p>")
            event.preventDefault()
        }else{
            $("#label2").css("color", "black")
        }

    });

});

