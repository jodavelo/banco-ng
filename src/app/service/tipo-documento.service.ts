import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoDocumento } from '../domain/tipo-documento';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {

  public url:string = "http://localhost:8080/banco-rest/rest/tipo-documento/";

  constructor(public httpClient:HttpClient) { }

  findAll():Observable<any>{
    return this.httpClient.get(this.url);
  }

  save(tipoDocumento:TipoDocumento):Observable<any>{
    return this.httpClient.post(this.url, tipoDocumento);
  }
}
