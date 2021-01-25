$(document).ready(function() {
    // console.log($('a').length);

    // $('a').each(function(index)
    // {
    //     var that = $(this);
    //     var enlace = that.attr("href");
    //     that.text(enlace);
    // });


    reloadList();

    $('#add_button')
    .removeAttr('disabled')
    .click(function() {
        $('#menu').prepend('<li><a href="'+ $('#add_link').val() + '"></a></li>');
        $('#add_link').val('')
        reloadList();
    })

});

function reloadList() {
    $('a').each(function(index)
    {
        var that = $(this);
        var enlace = that.attr("href");
        // Para agredar nuevos atributos a un elemento
        that.attr('target', 'blank')
        //Para quitar cualquier atributo a un elemento
        that.removeAttr();
        that.text(enlace);
    });
}