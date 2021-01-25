"use strict";
/*alert("Hola amigos");

var pais = "Colombia";
let prueba = "Hola";

Diferencia entre let y var, 

Let => Permite limitar el uso de variables al bloque donde se está usando.
Var =>  Define un variable global o local en una función sin importar el ámbitos del bloque

//PRUEBA CON VAR 
var numero = 40;
console.log(numero);

if (true) {
    var numero = 50;
    console.log(numero);
}   

console.log(numero);    

//PRUEBA CON LET
var texto = "Curso de JavaScript";
console.log(texto);//Valor js

if (true) {
    let texto = "Curso Laravel5";
    console.log(texto);//Valor Laravel
}

console.log(texto);//Valor js

//Alerta
alert("Hola mundo");

//CONFIRMACIÓN
confirm("¿Quieres continuar?");

//Ingreso de datos
prompt("¿Qué edad tienes?", 'Ingresa tu edad');*/

/*do{
    var numero1 = prompt("Digita un número");
    var numero2 = prompt("Digita otro número");

    

} while (numero1 >= 0 && numero2 >=0 && Number(numero1) && Number(numero2)) {
    alert("Ingrese de nuevo los datos!!")
}

if (numero1 > numero2) {
    alert(numero1 + " es mayor que " + numero2);
} else if (numero2 > numero1) {
    alert(numero2 + " es mayor que " + numero1);
} else { 
    alert("Los dos números son iguales");
}*/

//EJERCICIO 3

/*var numero1 = prompt("Digita un número");
var numero2 = prompt("Digita otro número");

if(numero1 < numero2) {
    for (var i = numero1; i<=numero2; i++) {
        console.log(i);
    }
} else if (numero2 < numero1) {
    for (var i = numero2; i<=numero1; i++) {
        console.log(i);
    }
} else {
    alert("Los dos números son iguales");
}*/

//Funciones
function calculadora(numero1, numero2, operacion) {
  var resultado = 0;
  switch (operacion) {
    case 1:
      resultado = numero1 + numero2;
      break;
    case 2:
      resultado = numero1 - numero2;
      break;
    case 3:
      resultado = numero1 * numero2;
      break;
    case 4:
      resultado = numero1 / numero2;
      break;
    default:
      resultado = "No se puede hacer otra operación";
      break;
  }
  return resultado;
}
var resultado = calculadora(4, 6, 3);

console.log(resultado);

//PARAMETROS SPREAD Y REST

function listadoFrutas(fruta1, fruta2, ...todasLasFrutas) {
  console.log("Fruta 1: ", fruta1);
  console.log("Fruta 2: ", fruta2);
  console.log("Fruta 2: ", todasLasFrutas);
}
//Muestra un array los valores que llegan al parámetro con 3 puntos
listadoFrutas("Naranja", "Manzana", "Sandía", "Banano");

var frutas = ["Sandía", "Banano"];
listadoFrutas("Naranja", "Manzana", frutas);

//Funcion REST
function cocinar(ingrediente1, ingrediente2, ...masIngredientes) {
  console.log("Ingrediente: " + ingrediente1);
  console.log("Ingrediente: " + ingrediente2);
  console.log("Ingrediente: " + masIngredientes);
}

cocinar("Tomate", "Cebolla", "Papa", "Huevos", "Frijoles");

//Función SPREAD
function cocinar2(ingrediente1, ingrediente2, ingrediente3) {
  console.log("Ingrediente: " + ingrediente1);
  console.log("Ingrediente: " + ingrediente2);
  console.log("Ingrediente: " + ingrediente3);
}
var unosIngredientes = ["Pasta", "Leche"];

cocinar2(...unosIngredientes, "Arroz");

//FUNCIONES ANÓNIMAS Y CALBACKS

//Función anónima
var saludar = function (nombre) {
  var mensaje = "Hola de nuevo " + nombre;
  return mensaje;
};

//Calbacks
function calcular(num1, num2, sumarCB, restarCB, multiCB) {
  var suma = num1 + num2;
  var resta = num1 - num2;
  var multi = num1 * num2;

  sumarCB(suma);
  restarCB(resta);
  multiCB(multi);
}

calcular(2, 4, function (resultado) {
    console.log("Suma", resultado);
  },function (resultado) {
    console.log("Resta", resultado);
  }, function (resultado) {
      console.log("Multiplicación", resultado);
  }
);

//FUNCIONES FLECHA

function sumar(numero1, numero2, suma, resta) {
  suma(numero1 + numero2);
  resta(numero1 - numero2);
}
//'dato' es el parámetro de entrada de la función
sumar(
  7,
  19,
  (dato) => {
    console.log("El resultado de la suma es: ", dato);
  },
  (rest) => {
    console.log("El resultado de la resta es: ", rest);
  }
);

//Funcion labda con más de un parámetro

var suma = (datoA, datoB) => {
  var datoC = 5;
  return datoA + datoB + datoC;
};
console.log(suma(10, 15));

//Cortador de cadena de texto en array
var frase = "Cuando vi que los días fueron oscuros, supe que fue lo que pasó";
var busqueda = frase.split(" ");
var busqueda2 = frase.trim();
console.log(busqueda);

//Plantillas de texto en JavaScript
//var nombre = prompt("INSERTA TU");
//var apellido = prompt("INSERTA TU");

/*var texto = ` 
    <h1>Hola qué tal</h1>
    <h3 class="nombres">Mi nombre es: ${nombre}</h3>
    <h3 class="nombres">Mi apellido es: ${apellido}</h3>
    `;
*/
//ocument.write(texto);

var lenguajes = new Array("C#", "Java", "C++", "PHP", "JavaScript", "Kotlin");

document.write("<h1>Lenguajes de programación más importantes</h1>");
document.write("<ul>");

/*for (var i = 0; i < lenguajes.length; i++) {
    document.write("<li>" + lenguajes[i] + "</li>");
}
document.write("</ul>");
*/
//Foreach en JS

lenguajes.forEach((elemento, indice, array) => {
  document.write("<li>" + indice + " - " + elemento + "</li>");
});

for (let lenguaje in lenguajes) {
  document.write("<li>" + lenguajes[lenguaje] + "</li>");
}

//Busquedas en un array
//find -> Busca el elemento
// var busqueda2 = lenguajes.findIndex((lenguaje) => lenguaje == "PHP");

// var precios = new Array(10, 20, 30, 40);

// var busqueda3 = precios.some((precio) => precio >= 20);

// console.log(busqueda3);

//Ejercicio arreglos
// var arreglo = new Array();
// for (var i = 0; i < 6; i++) {
//   var numero = prompt("Inserte un número");
//   arreglo.push(numero);
// }

// for (var item in arreglo) {
//   document.write("<li>" + arreglo[item] + "</li>");
//   console.log("- " + arreglo[item]);
// }

// var arregloOrdenado = arreglo => {
//   let orden = arreglo.sort((a, b)=>a-b);
//   return orden;
// }

// console.log(arregloOrdenado(arreglo));

// var arregloInvertido = arreglo => {
//   let invertido = arreglo.reverse();
//   return invertido;
// }

// console.log(arregloInvertido(arreglo));
// console.log(arreglo.length);
// var numeroi = parseInt(prompt("Buscar un número del arreglo", 0));
// var busquedaNumero = arreglo.findIndex(numero => numero == numeroi);

// if (busquedaNumero && busquedaNumero != -1) {
//   document.write("<h3>Numero encontrado</h3>");  
//   document.write("<h3>Está en la posición " + busquedaNumero + "</h3>");
// } else {
//   document.write("<h3>Numero no encontrado</h3>");
// }



