import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PeticionesService } from '../service/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService],
})
export class ExternoComponent implements OnInit {
  public user: any;
  public user_id: any;
  public fecha: any;
  public new_user: any;
  public usuario_guardado: any;
  constructor(private _peticionesService: PeticionesService) {
    this.fecha = new Date(2018, 1, 15);
    this.user_id = 3;
    this.new_user = {
      "name": '',
      "job": ''
    };
  }

  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario() {
    this._peticionesService.getUser(this.user_id).subscribe(
      (result) => {
        this.user = result.data;
      },
      (error) => {
        alert(<any>error);
      }
    );
  }

  onSubmit(form: NgForm) {
    this._peticionesService.addUser(this.new_user).subscribe(
      (result) => {
        this.usuario_guardado = result;
        alert('El usuario se ha guardado correctamente')
      },
      (error) => {
        console.log(<any>error)
      }
      )
  }
}
