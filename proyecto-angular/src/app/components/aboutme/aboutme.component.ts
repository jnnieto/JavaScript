import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public email: string;
  constructor() {
    this.title = "Nicolás Nieto";
    this.subtitle = "Estudiante de desarrollo web e ingeniería de sistemas en la Universidad de Cundinamarca";
    this.email = "niconieto1506@gmail.com"
  }

  ngOnInit(): void {
  }

}
