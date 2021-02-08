import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public nombre: string = "";
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,) {
      
    }
    
  ngOnInit(): void {
    //Recoger parámetros por la url
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      
      if(this.nombre == 'ninguno') {
        this._router.navigate(['/home'])
      }
    });
  }


  //Redirecciones de router navigate
  redirigir() {
    this._router.navigate(['/zapatillas'])
  }

}
