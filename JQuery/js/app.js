$(document).ready(function() {
  //Selector de ID
  $("#rojo").css("background", "red").css("color", "white");
  $("#amarillo").css("background", "yellow");

  $("#verde").css("background", "green").css("color", "white");

  //Selector de clase
  $(".zebra").css("padding", "5px");

  $(".sin_borde").click(() => {
    console.log("Click");
    $(".sin_borde").addClass("zebra");
  });

  //Selectores de etiqueta
  var parrafos = $("p").css("cursor", "pointer");
  parrafos.click(function () {
    if ($("p").hasClass("grande")) {
      $("p").addClass("grande");
    } else {
      $("p").removeClass("grande");
    }
  });

  //Selector de atributo
  $('[title="Google"]').css("background", "#ccc");
  $('[title="Facebook"]').css("background", "#ddd");

  //Otros
  // $('p, a').addClass('margen_superior')
  //EL find es para encontrar una clase||id||etc en el DOM
  //EL parent() es para salir de un etiqueta que tiene plantado un elmento 
  var busqueda = $("#caja").find(".resaltado").eq(0).parent().parent().parent().find('[title="Google"]');
  //console.log(busqueda);
});  