//Para usar TS en el CMD --> tsc -v
//Para hacer que el archivo TS se compile automáticamente --> tsc -w *.ts

console.log("Hola Mundooo en TypeScript con nicolas")
// alert('Hola')
document.write('Ya srive TypeScript');

//Tipos de Datos

let cadena: string | number = "Nicolas Nieto";
cadena = 23;
let edad: number = 19;
let mayorEdad: boolean = true;
//Any permite asignar cualquier valor en una variable
let cualquiera: any = "sdjfjdsf" 

//Arrays
var lenguajes: Array<string> = ["PHP", "¨C#", "C++"];
let years: number[] = [1, 3, 6, 2]

console.log(cadena, edad, mayorEdad, lenguajes) ;

//Crear un tipo de dato
type letrasonumeros = string | number;
let ejemplo: letrasonumeros = "Johann Nicolás";

// Let y Var en TS
var numero1 = 10;
var numero2 = 12;

if (numero1 == 10) {
    let numero1 = 44;
    var numero2 = 55;

    console.log(numero1, numero2);
}
console.log(numero1, numero2);


//Funciones de tipado fuerte
function getNumero(numero: number = 12): string {
    return "El número es: " + numero;
}

console.log(getNumero())