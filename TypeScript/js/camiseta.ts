//Interface
interface CamisetaBase {
  getColor(color);
  setColor(color);
}

//Decorador
function estampar(logo: string) {
  return function (target: Function) {
    target.prototype.estampacion = function (): void {
      console.log("Camiseta estampada con el logo de " + logo);
    };
  };
}

@estampar("Guccu Gang")
//Clase (molde de objeto)
class Camiseta implements CamisetaBase {
  //Propiedades (características del objeto)
  private color: string;
  private modelo: string;
  private marca: string;
  private talla: string;
  private precio: number;

  //Métodos (funciones o acciones del objeto)
  constructor(_color, _modelo, _marca, _talla, _precio) {
    this.color = _color;
    this.marca = _marca;
    this.modelo = _modelo;
    this.talla = _talla;
    this.precio = _precio;
  }

  public getColor(): string {
    return this.color;
  }
  public setColor(value: string) {
    this.color = value;
  }

  public getModelo(): string {
    return this.modelo;
  }
  public setModelo(value: string) {
    this.modelo = value;
  }

  public getMarca(): string {
    return this.marca;
  }
  public setMarca(value: string) {
    this.marca = value;
  }

  public getTalla(): string {
    return this.talla;
  }
  public setTalla(value: string) {
    this.talla = value;
  }

  public getPrecio(): number {
    return this.precio;
  }
  public setPrecio(value: number) {
    this.precio = value;
  }
}

var camiseta = new Camiseta("Rojo", "Manga corta", "Polo", "M", 80000);

// camiseta.color = "Rojo";
// camiseta.modelo = "Manga corta";
// camiseta.marca = "Polo"
// camiseta.talla = "M"
// camiseta.precio = 80000;

// camiseta.estampacion();
console.log(camiseta);

//Herencia
class Sudadera extends Camiseta {
  private capucha: boolean;

  public getCapucha(): boolean {
    return this.capucha;
  }
  public setCapucha(value: boolean) {
    this.capucha = value;
  }
}

var sudadera = new Sudadera("Azul", "Manga Larga", "Adidas", "XL", 150000);
sudadera.setCapucha(true);

console.log(sudadera);

//Lógica del formulario
//Modulos
module Tienda {
  export class Ropa {
    constructor(public titulo: string) {
      alert(titulo);
    }
  }
  export class Informatica {
    constructor(public titulo: string) {
      alert("Tienda de tecnología: " + titulo);
    }
  }
}
//Lamar el módulo
import Informatica = Tienda.Informatica;
let cargar_informatica = new Informatica("Súper Tienda");
//Decorador
function arranque(lanzar: string) {
  return (target: Function) => {
    target.prototype.lanzamiento = function (): void {
      console.log(lanzar);
    };
  };
}
@arranque("Lanzamiento del curso de NodeJS y Angular 2")
class Programa {
  private nombre: string;

  public getNombre(): string {
    return this.nombre;
  }
  public setNombre(value: string) {
    this.nombre = value;
  }
}
var programas = [];

function guardar() {
  var nombre: string = (<HTMLInputElement>(
    document.getElementById("nombre")
  )).value.toString();
  var programa = new Programa();
  programa.setNombre(nombre);
  programas.push(programa);

  var list = "";
  for (var i = 0; i < programas.length; i++) {
    list = list + "<li>" + programas[i].getNombre() + "</li>";
  }

  var listado = <HTMLElement>document.getElementById("listado");
  listado.innerHTML = list;
}
