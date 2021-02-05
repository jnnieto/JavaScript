import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core'

@Component ({
    selector: 'video-juego',
    templateUrl: './videojuego.component.html'
})

export class VideoJuegoComponent implements OnInit, DoCheck, OnDestroy {
    public titulo: string;
    public listado: string;
    
    constructor() {
        this.titulo = "Creando mi primer componente con videojuegos en Angular"
        this.listado = "Listado de los juegos más populares"
    }

    ngOnInit() {
        console.log('OnInit ejecutado!')
    }

    ngDoCheck() {
        //Este método se ejecuta cuando se modifica el componente
        console.log('DoCheck ejecutado')
    }

    ngOnDestroy() {
        //Este método se ejecuta cuando se desea destruir el componente (Ciclo de vida del componente)
        console.log("OnDestroy ejecutado!!")
    }

    cambiarTitulo() {
        this.titulo = "Este es el nuevo titulo del componente de cursos" 
    }
}  