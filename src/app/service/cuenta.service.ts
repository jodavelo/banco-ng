import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cuenta } from '../domain/cuenta';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  public url:string = "http://localhost:8080/banco-rest/rest/cuenta/";

  constructor(public httpClient:HttpClient) { }

  findAll():Observable<any>{
    return this.httpClient.get(this.url);
  }

  save(cuenta:Cuenta):Observable<any>{
    return this.httpClient.post(this.url, cuenta);
  }

  update(cuenta:Cuenta):Observable<any>{
    return this.httpClient.put(this.url, cuenta);
  }

  delete(id:string):Observable<any>{
    return this.httpClient.delete(this.url+id);
  }

  findById(id:string):Observable<any>{
    return this.httpClient.get(this.url+id);
  }


}
