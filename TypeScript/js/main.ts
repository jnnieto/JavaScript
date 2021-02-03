//import { Camiseta } from './camiseta'

class Main {
    constructor() {
        console.log("Aplicación de JS caragada!!")
    }
    
    getCamiseta() {
        return new Camiseta("Verde", "Manga corta",  "Nike", "L", 129000)
    }
}

var main = new Main()