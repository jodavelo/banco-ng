import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoUsuario } from '../domain/tipo-usuario';

@Injectable({
  providedIn: 'root'
})
export class TipoUsuarioService {

  public url:string = "http://localhost:8080/banco-rest/rest/tipo-usuario/";

  constructor(public httpClient:HttpClient) { }

  findAll():Observable<any>{
    return this.httpClient.get(this.url);
  }

  save(tipoUsuario:TipoUsuario):Observable<any>{
    return this.httpClient.post(this.url, tipoUsuario);
  }
}
