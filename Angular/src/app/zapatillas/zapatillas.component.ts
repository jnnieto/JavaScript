import { fromEventPattern } from "rxjs";
import { Component } from '@angular/core'

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent {
    public titulo = 'Este es el componente de Zapatillas';
}