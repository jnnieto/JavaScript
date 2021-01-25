"use strict";

//JSON -> JavaScript Object Notation
// var pelicula1 = {
//   titulo: "Avengers End Game",
//   year: 2019,
//   pais: "Estados Unidos",
// };

// var pelicula2 = [
//   {
//     titulo: "Avengers Infinity War",
//     year: 2018,
//     pais: "Estados Unidos",
//   },
//   pelicula1,
// ];
// console.log(pelicula1.titulo);

  // var caja_peliculas = document.querySelector('#movies');
  // for (var index in pelicula2) {
  //     var p = document.createElement("p");
  //     p.append(pelicula2[index].titulo);
  //     caja_peliculas.append(p)
  // }


//LOCAL STORAGE
//Verificar si el navegador cuenta con localstorage
// if (typeof Storage !== "undefined") {
//   console.log("Storage disponible");
// } else {
//   console.log("Storage no disponible");
// }

// //Guardar datos
// //localStorage.setItem("Titulo", "Curso de JSON");

// //Recuperar elemento y meterlo en la página
//   document.querySelector("#movies").innerHTML = localStorage.getItem("Titulo");
//   //Guardar objeto JSON en un localstorage
//   var usuario = {
//     nombre: "Nicolas",
//     apellido: "Nieto",
//     email: "niconieto1506@gmail.com",
//   };
//   //Para almacer un JSON en un localstorage, toca usar un objeto JSON.stringify
//   localStorage.setItem("Usuario", JSON.stringify(usuario));

//   //Recuperar objeto
//   var userJS = JSON.parse(localStorage.getItem("Usuario"));
//   console.log(userJS);

//   //Borrar un elemento
//   localStorage.removeItem("Usuario");
//   //Borrar todo el localstorage
//   localStorage.clear();

//   //Ejercicio LocalStorage
//   var formulario = document.querySelector("#formpeliculas");
//   formulario.addEventListener("submit", function() {
//     var titulo = document.querySelector("#nombrePelicula").value;
//     if (titulo.length >= 1) {
//         localStorage.setItem("Titulo", titulo);
//     }
// });



