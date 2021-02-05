var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de " + logo);
        };
    };
}
var Camiseta = /** @class */ (function () {
    //Métodos (funciones o acciones del objeto)
    function Camiseta(_color, _modelo, _marca, _talla, _precio) {
        this.color = _color;
        this.marca = _marca;
        this.modelo = _modelo;
        this.talla = _talla;
        this.precio = _precio;
    }
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta.prototype.setColor = function (value) {
        this.color = value;
    };
    Camiseta.prototype.getModelo = function () {
        return this.modelo;
    };
    Camiseta.prototype.setModelo = function (value) {
        this.modelo = value;
    };
    Camiseta.prototype.getMarca = function () {
        return this.marca;
    };
    Camiseta.prototype.setMarca = function (value) {
        this.marca = value;
    };
    Camiseta.prototype.getTalla = function () {
        return this.talla;
    };
    Camiseta.prototype.setTalla = function (value) {
        this.talla = value;
    };
    Camiseta.prototype.getPrecio = function () {
        return this.precio;
    };
    Camiseta.prototype.setPrecio = function (value) {
        this.precio = value;
    };
    Camiseta = __decorate([
        estampar("Guccu Gang")
        //Clase (molde de objeto)
    ], Camiseta);
    return Camiseta;
}());
var camiseta = new Camiseta("Rojo", "Manga corta", "Polo", "M", 80000);
// camiseta.color = "Rojo";
// camiseta.modelo = "Manga corta";
// camiseta.marca = "Polo"
// camiseta.talla = "M"
// camiseta.precio = 80000;
// camiseta.estampacion();
console.log(camiseta);
//Herencia
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    Sudadera.prototype.setCapucha = function (value) {
        this.capucha = value;
    };
    return Sudadera;
}(Camiseta));
var sudadera = new Sudadera("Azul", "Manga Larga", "Adidas", "XL", 150000);
sudadera.setCapucha(true);
console.log(sudadera);
//Lógica del formulario
//Modulos
var Tienda;
(function (Tienda) {
    var Ropa = /** @class */ (function () {
        function Ropa(titulo) {
            this.titulo = titulo;
            alert(titulo);
        }
        return Ropa;
    }());
    Tienda.Ropa = Ropa;
    var Informatica = /** @class */ (function () {
        function Informatica(titulo) {
            this.titulo = titulo;
            alert("Tienda de tecnología: " + titulo);
        }
        return Informatica;
    }());
    Tienda.Informatica = Informatica;
})(Tienda || (Tienda = {}));
//Lamar el módulo
var Informatica = Tienda.Informatica;
var cargar_informatica = new Informatica("Súper Tienda");
//Decorador
function arranque(lanzar) {
    return function (target) {
        target.prototype.lanzamiento = function () {
            console.log(lanzar);
        };
    };
}
var Programa = /** @class */ (function () {
    function Programa() {
    }
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.setNombre = function (value) {
        this.nombre = value;
    };
    Programa = __decorate([
        arranque("Lanzamiento del curso de NodeJS y Angular 2")
    ], Programa);
    return Programa;
}());
var programas = [];
function guardar() {
    var nombre = (document.getElementById("nombre")).value.toString();
    var programa = new Programa();
    programa.setNombre(nombre);
    programas.push(programa);
    var list = "";
    for (var i = 0; i < programas.length; i++) {
        list = list + "<li>" + programas[i].getNombre() + "</li>";
    }
    var listado = document.getElementById("listado");
    listado.innerHTML = list;
}
