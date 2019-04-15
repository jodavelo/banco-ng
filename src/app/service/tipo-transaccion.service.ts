import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoTransaccion } from '../domain/tipo-transaccion';

@Injectable({
  providedIn: 'root'
})
export class TipoTransaccionService {

  public url:string = "http://localhost:8080/banco-rest/rest/tipo-transaccion/";

  constructor(public httpClient:HttpClient) { }

  findAll():Observable<any>{
    return this.httpClient.get(this.url);
  }

  save(tipoTransaccion:TipoTransaccion):Observable<any>{
    return this.httpClient.post(this.url, tipoTransaccion);

  }

  
}
