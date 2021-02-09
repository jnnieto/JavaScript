import { Pipe, PipeTransform } from '@angular/core'
import { $ } from 'protractor'

@Pipe ({
    name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform {
    constructor() {
        
    }

    //dato | calculaddora: otroDato
    //param1                param2
    transform(value: any, value_two: any) {
        let operaciones = `
            Suma: ${value + value_two} -
            Resta: ${value - value_two} -
            Multiplicacion: ${value * value_two} -
            Division: ${value / value_two} 
        `;
        return operaciones;
    }
}
