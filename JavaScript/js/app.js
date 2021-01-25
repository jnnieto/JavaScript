'use strict'
window.addEventListener ('load', () => {
    // console.log('Holaskjhkjsdf')
    var boton = document.querySelector('#boton');

    boton.addEventListener ('click', () => {
        var btn = boton.style.background;
        if (btn == "red") {
            boton.style.background = "green";
        } else {
            boton.style.background = "red";
        }
    });

});