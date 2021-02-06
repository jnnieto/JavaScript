import { fromEventPattern } from "rxjs";
import { Component, OnInit } from '@angular/core'   
import { Zapatilla } from '../models/zapatilla'

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit{
    public titulo = 'Este es el componente de Zapatillas';
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color: string;
    public miMarca: string;

    constructor() {
        this.color = "red";
        this.marcas = new Array();
        this.zapatillas = [
            new Zapatilla('Reebook Classic', 'Reebook', 'Blanco', 280000, true),
            new Zapatilla('SuperStar', 'Adidas', 'Negro', 360000, true),
            new Zapatilla('Vans Classic', 'Vans', 'Vinotinto', 200000, false)
        ]
        this.miMarca = "Fila";
    }

    ngOnInit() {
        console.log(this.zapatillas)
        this.getMarcas();
    }

    getMarcas() {
        this.zapatillas.forEach((zapatilla: Zapatilla, index: number) => {
            this.marcas.push(zapatilla.marca);
            console.log(index)
        });
        console.log(this.marcas);
    }
    

    getMarca() {
        alert(this.miMarca)
    }

    addMarca() {
        this.marcas.push(this.miMarca)
    }

    //Ejemplo click
    borrarMarca(index: number) {
        // delete this.marcas[index]
        this.marcas.splice(index, 1)
    }

    //Ejemplo de blur
    onBlur() {
        console.log('Haz salido del input')
    }

    //Ejemplo de keyUp
    onKeyUp() {
        alert(this.miMarca)
    }
}