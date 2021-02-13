import { ModuleWithProviders, NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateprojectsComponent } from './components/createprojects/createprojects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

//Array de rutas
const appRoutes: Routes = [
    {path: '', component: AboutmeComponent},
    {path: 'sobre-mi', component: AboutmeComponent },
    {path: 'proyectos', component: ProjectsComponent },
    {path: 'crear-proyecto', component: CreateprojectsComponent},
    {path: 'contacto', component: ContactComponent},
    {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);

