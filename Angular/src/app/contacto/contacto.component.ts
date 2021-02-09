import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public usuario: Usuario;
  constructor() { 
    this.usuario = new Usuario('', '', '', '')
  } 

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(this.usuario)
    form.reset()
  }
}
