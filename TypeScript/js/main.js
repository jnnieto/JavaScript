//import { Camiseta } from './camiseta'
var Main = /** @class */ (function () {
    function Main() {
        console.log("Aplicación de JS caragada!!");
    }
    Main.prototype.getCamiseta = function () {
        return new Camiseta("Verde", "Manga corta", "Nike", "L", 129000);
    };
    return Main;
}());
var main = new Main();
