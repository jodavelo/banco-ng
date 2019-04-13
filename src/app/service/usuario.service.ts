import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../domain/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public url:string = "http://localhost:8080/banco-rest/rest/usuario/";

  constructor(public httpClient:HttpClient) { }

  findAll():Observable<any>{
    return this.httpClient.get(this.url);
  }

  save(usuario:Usuario):Observable<any>{
    return this.httpClient.post(this.url, usuario);
  }

  update(usuario:Usuario):Observable<any>{
    return this.httpClient.put(this.url, usuario);
  }

  delete(id:Usuario):Observable<any>{
    return this.httpClient.delete(this.url+id);
  }

  findById(id:string):Observable<any>{
    return this.httpClient.get(this.url+id);
  }


}
