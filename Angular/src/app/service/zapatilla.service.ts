import { Injectable } from '@angular/core'
import { Zapatilla } from '../models/zapatilla';

@Injectable({
    providedIn: 'root',
})
export class ZapatillaService {
    public zapatillas: Array<Zapatilla>
;
    constructor() {
        this.zapatillas = [
            new Zapatilla('Reebook Classic', 'Reebook', 'Blanco', 280000, true),
            new Zapatilla('SuperStar', 'Adidas', 'Negro', 360000, true),
            new Zapatilla('Vans Classic', 'Vans', 'Vinotinto', 200000, false)
        ];
    }

    getTexto() {
        return "Hola mundo desde un servicio";
    }

    getZapatillas(): Array<Zapatilla> {
        return this.zapatillas;
    }
}