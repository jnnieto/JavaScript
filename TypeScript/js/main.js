//Clase JSON

var bicicleta = {
    color: "Rojo",
    modelo: "BNX",
    tipo_frenos: "Discos",
    velocidad_max: "20 Km/h",
    cambiarColor: function(nuevoColor){
        this.color = nuevoColor;
    }
};

bicicleta.cambiarColor("Azul");

console.log(bicicleta)
