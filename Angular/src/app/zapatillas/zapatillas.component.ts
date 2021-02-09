import { Component, OnInit } from '@angular/core'   
import { Zapatilla } from '../models/zapatilla'
import { ZapatillaService } from '../service/zapatilla.service';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit{
    public titulo = 'Este es el componente de Zapatillas';
    public zapatillas: Array<Zapatilla> = [];
    public marcas: String[];
    public color: string;
    public miMarca: string;

    constructor(
        private _zapatillaService: ZapatillaService
    ) {
        this.color = "red";
        this.marcas = new Array();
        this.miMarca = "Fila";
    }

    ngOnInit() {
        this.zapatillas = this._zapatillaService.getZapatillas();
        //alert(this._zapatillaService.getTexto())
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