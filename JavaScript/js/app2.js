"use strict";

// //DOM - Document Object Model
// function cambiarColor (color) {
//     caja.style.background = color;
// }

// //var caja = document.getElementById("micaja");
// var caja = document.querySelector("#micaja");
// caja.innerHTML = "HOLA GATITA LINDA";
// caja.style.background = "green";
// caja.style.color = "white";
// caja.className = "gatita";
// console.log(caja)

// //Conseguir elementos por sus etiquetas
// var todosLosDivs = document.getElementsByTagName('div');
// //var contenidoEnTexto = todosLosDivs[2];
// //contenidoEnTexto.innerHTML = "Hola mundo"
// for (var valor in todosLosDivs) {
//     if (typeof todosLosDivs[valor].textContent == 'string') {
//         var parrafo = document.createElement("p");
//         var texto = document.createTextNode(todosLosDivs[valor].textContent);
//         parrafo.appendChild(texto);
//         document.querySelector("#miseccion").appendChild(parrafo);
//     }
// }
//console.log(contenidoEnTexto);

//BOM - Browser Object Model

/* function getBOM () {
     console.log(window.innerHeight);
     console.log(window.innerWidth);
     console.log(screen.width);
     console.log(window.location);
 }
 getBOM()*/

//Eventos de ratón
//Metodo load para cargar el script en el HEAD del HTML
window.addEventListener("load", () => {
  // var boton = document.querySelector('#boton');

  // function cambiarColor () {
  //     var bg = boton.style.background;
  //     if ( bg == "red") {
  //         boton.style.background = "blue";
  //     } else {
  //         boton.style.background = "red";
  //     }
  //     return true;
  // }

  // function hoverBoton () {
  //     boton.style.background = "black";
  //     boton.style.color = "white";
  // }

  // //Evento Click
  // boton.addEventListener ('click', function () {
  //     cambiarColor();
  // });

  // //Mouse over
  // boton.addEventListener ('mouseover', function () {
  //     hoverBoton();
  // });

  // //Mouse out
  // boton.addEventListener ('mouseout', () => boton.style.background = "yellow");

  // //Focus
  // var input = document.querySelector('#campo_nombre');
  // input.addEventListener ('focus', function () {
  //     console.log("Estás dentro del input")
  // });

  // //Blur
  // input.addEventListener ('blur', function () {
  //     console.log("Estás fuera del input")
  // });

  // //Keydown
  // input.addEventListener ('keydown', function (event) {
  //     console.log("Estas pulsando esta tecla", String.fromCharCode(event.keyCode));
  // });

  // //Keypress
  // input.addEventListener ('keypress', function (event) {
  //     console.log("Tecla presionada", String.fromCharCode(event.keyCode));
  // });

  // //Keyup
  // input.addEventListener ('keyup', function (event) {
  //     console.log("Tecla ya no presionada", String.fromCharCode(event.keyCode));
  // });

  //Timers
  // var tiempo = setInterval(() => {
  //     console.log("Set interval ejecutado");
  //     var encabezado = document.querySelector("h1")
  //     if (encabezado.style.fontSize == "50px") {
  //         encabezado.style.fontSize = "20px";
  //     } else {
  //         encabezado.style.fontSize = "50px";
  //     }

  // }, 3000);

  //     var botonEmpezar = document.querySelector('#botonEmpezar');

  //     function intervalo () {
  //         var tiempo = setInterval(() => {
  //             console.log("Set interval ejecutado");
  //             var encabezado = document.querySelector("h1")
  //             if (encabezado.style.fontSize == "50px") {
  //                 encabezado.style.fontSize = "20px";
  //             } else {
  //                 encabezado.style.fontSize = "50px";
  //             }
  //         }, 1000);
  //         return tiempo;
  //     }

  //     var tiempo = intervalo();

  //     boton.addEventListener ('click', () => {
  //         clearInterval(tiempo);
  //         console.log("Has parado el timer");
  //     });

  //     botonEmpezar.addEventListener ('click', () => {
  //         intervalo();
  //         console.log("Has iniciado el timer");
  //     });
  //

  //Ejercicio DOM, Eventos

  var formulario = document.querySelector("#form");
  var datos = document.querySelector(".datos");

  formulario.addEventListener("submit", function () {
    var nombre = document.querySelector("#nombre").value;
    var apellido = document.querySelector("#apellido").value;
    var edad = parseInt(document.querySelector("#edad").value);
    var error = document.querySelector('#error');
    if (nombre.trim() == null || nombre.trim().length == 0) {
        alert('Llene el campo de nombre')
        error.innerHTML = "*";
        return false;
    }
    if (apellido.trim() == null || apellido.trim().length == 0 ) {
        alert('Llene el campo de apellido')
        error.innerHTML = "*";
        return false;
    }
    if (edad == null || edad <= 0 || isNaN(edad)) {
        alert('Campo de edad no válido')
        error.innerHTML = "*";
        return false;
    }

    var p_nombre = document.querySelector("#p_nombre span");
    var p_apellido = document.querySelector("#p_apellido span");
    var p_edad = document.querySelector("#p_edad span");

    p_nombre.innerHTML = nombre;
    p_apellido.innerHTML = apellido;
    p_edad.innerHTML = edad;

    // var elementos = document.createElement("p");
    // elementos.append(nombre);
    // elementos.append(apellido);    
    // elementos.append(edad);
    // datos.append(elementos);
  });

}); //Final del load  
