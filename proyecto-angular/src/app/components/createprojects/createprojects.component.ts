import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
@Component({
  selector: 'app-createprojects',
  templateUrl: './createprojects.component.html',
  styleUrls: ['./createprojects.component.css'],
  providers: [ProjectService]
})
export class CreateprojectsComponent implements OnInit {
  public title: string;
  public project: Project;
  constructor(
    private _projectService: ProjectService
  ) {
    this.title = "Crear un nuevo proyecto";
    this.project = new Project('', '', '', '', 2021, '', '');
  }

  ngOnInit(): void {
  }

  onSubmit(form: Form){
    console.log(this.project);

  }
}
