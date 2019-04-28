import { Injectable } from '@angular/core';
import { findLocaleData } from '@angular/common/src/i18n/locale_data_api';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../domain/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public url:string ="http://localhost:8080/banco-rest/rest/cliente/";

  constructor(public httpClient:HttpClient) {   
  }

  findAll():Observable<any>{
      return this.httpClient.get(this.url);
  }

  save(cliente:Cliente):Observable<any>{
    return this.httpClient.post(this.url, cliente);
  }

  update(cliente:Cliente):Observable<any>{
    return this.httpClient.put(this.url, cliente);
  }

  delete(id:string):Observable<any>{
    return this.httpClient.delete(this.url+id);
  }

  findById(id:string):Observable<any>{
    return this.httpClient.get(this.url+id);
  }
}
