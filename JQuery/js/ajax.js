$(document).ready(function() {
    //Load
    // $('#datos').load('https://reqres.in/');
    
    //Get y post
    $.get('https://reqres.in/api/users', {page: 2}, function(response) {
        response.data.forEach((element, index) => {
            $('#datos').append("<p>" + element.first_name + " " + element.last_name + "</p>");
        })
    });

    /* var usuario = {
        nombre: 'Nicolas',
        apellido: 'Nieto'
    } */
    
    $('#formulario').submit((e) => {
        e.preventDefault();
        var usuario = {
            nombre: $('input[name="first_name"]').val(),
            apellido: $('input[name="last_name"]').val()
        };
        console.log(usuario)
        /* $.post($(this).attr("action"), usuario, function (response){
            console.log(response)
        }).done(() => {
            alert('Usuario registrado correctamente')
        }) */

        //Metodo .ajax

        $.ajax({
            type: 'POST',
            url: "https://reqres.in/api/users",
            data: usuario,
            beforeSend: function(){
                console.log("Enviando usuario...")
            },
            success: function(response) {
                console.log(response)
            }, 
            error: function() {
               console.log("A ocurrido un error!!")
            },
            timeout: 2000
        });
        return false;
    });
});