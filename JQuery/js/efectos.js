$(document).ready(function() {
    var caja = $('#caja');
    $('#mostrar').hide()
    $('#mostrar').click(function() {
        $(this).hide()
        $('#caja').fadeTo('slow', 1)
        $('#ocultar').show('fast')
    });
    $('#ocultar').click(function() {
        $(this).hide()
        //Hace un fundido el metodo fadeOut / fadeIn
        //FadeTo juega con la opcidad del elemento
        //slideUp(ocultar), slideDown(mostrar)
        $('#caja').fadeTo('slow', 0.2)
        $('#mostrar').show('fast')
    });

    $('#todo-en-uno').click(function(){
        //Efectos -> toggle, fadetoggle, slideToggle
        $('#caja').toggle('fast')
    });

    $('#animar').click(function(){
        caja.animate({
                marginLeft: '500px',
                fontSize: '40px',
                height: '110px'
            }, 'slow')
            .animate({
                borderRadius: '900px',
                marginTop: '80px'
            }, 'slow')
            .animate({
                borderRadius: '0px',
                marginLeft: '0px'
            }, 'slow')
            .animate({
                borderRadius: '0px',
                marginTop: '20px',
                fontSize: '19px',
                width: '300px',
                height: '50px'
            }, 'slow', function() {
                alert('Cartel movido')
            })
    })
})