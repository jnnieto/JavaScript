$(document).ready(() => {
    //Eventos mouseOver
    var caja = $('#caja');
    /*caja.mouseover(function() {
        $(this).css('background', 'red')
    });

    //Eventos mouseOut
    caja.mouseout(function() {
        $(this).css('background', 'green')
    });*/

    function pasarRojo() {
        $(this).css('background', 'red')
    }
    function cambiaVerde() {
        $(this).css('background', 'green')
    }

    //Hover
    caja.hover(pasarRojo, cambiaVerde)

    //Click, Doble click
    caja.click(function() {
        $(this).css('background', 'blue')
            .css('color', 'white')
    })

    caja.dblclick(function() {
        $(this).css('background', 'pink')
            .css('color', 'red')
    })

    //Focus y blur
    var nombre = $('#nombre')
    var datos = $('#datos')
    nombre.focus(function() {
        $(this).css('border', '2px solid green')
    });

    nombre.blur(function() {
        $(this).css('border', '1px solid gray')
        datos.text($(this).val()).show();
    });

    //mousedown y mouseup
    datos.mousedown(function() {
        $(this).css('border-color', 'gray');
    })

    datos.mouseup(function() {
        $(this).css('border-color', 'black');
    })

    //Mousemove
    $(document).mousemove(function(){
        $('body').css('cursor', 'none')
        $('#sigueme').css("left", event.clientX)
        $('#sigueme').css("top", event.clientY)
    })

})