//Modos que permiten hacer peticiones externas
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../models/usuario";

@Injectable({
    providedIn: 'root',
})

export class PeticionesService {
    public url: string;
    constructor(
        //Objeto para hcaer peticiones ajax
        public _http: HttpClient
    ) {
        this.url = "https://reqres.in/";
    }

    getUser(userId: number): Observable<any> {
        //Un observable tiene siempre un método suscribe para recoger un dato de la petición ajax
        return this._http.get(this.url + 'api/users/' + userId);
    }

    addUser(user: Usuario ):Observable<any> {
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
        return this._http.post(this.url + 'api/users', params, { headers: headers });
    }
} 


