$(document).ready(function () {

    //Mover elemento por la pagina
    $('.elemento').draggable();

    //Redimensionar
    $('.elemento').resizable();

    //Seleccionar elementos
    //$('.lista-seleccionable').selectable();

    //Ordenar los elementos
    $('.lista-seleccionable').sortable({
        update: function (event, ui) {
            console.log('Se ha cambiado la lista')
        }
    });

    //Drop
    $('#elemento-movido').draggable();
    $('#area').droppable({
        drop: function( event, ui ) {
            $( this )
              .addClass( "ui-state-highlight" )
              .find( "p" )
                .html( "Dropped!" );
          }
    });

    //Efectos
    $('#mostrar').click(function() {
        $('.caja-efectos').toggle("shake", 4000)
        //Más efectos en https://jqueryui.com/demos/
    });

    //Tooltip

    $(document).tooltip()
}); 