//Para usar TS en el CMD --> tsc -v
//Para hacer que el archivo TS se compile automáticamente --> tsc -w *.ts
console.log("Hola Mundooo en TypeScript con nicolas");
// alert('Hola')
document.write('Ya srive TypeScript');
//Tipos de Datos
var cadena = "Nicolas Nieto";
cadena = 23;
var edad = 19;
var mayorEdad = true;
//Any permite asignar cualquier valor en una variable
var cualquiera = "sdjfjdsf";
//Arrays
var lenguajes = ["PHP", "¨C#", "C++"];
var years = [1, 3, 6, 2];
console.log(cadena, edad, mayorEdad, lenguajes);
var ejemplo = "Johann Nicolás";
// Let y Var en TS
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2 = 55;
    console.log(numero1_1, numero2);
}
console.log(numero1, numero2);
//Funciones de tipado fuerte
function getNumero(numero) {
    if (numero === void 0) { numero = 12; }
    return "El número es: " + numero;
}
console.log(getNumero());
