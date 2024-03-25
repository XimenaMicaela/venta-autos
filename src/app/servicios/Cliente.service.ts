import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

constructor() { }
baseUrl = "http://epico.gob.ec/cliente/public/api/";
  HttpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
  };

/* 
  insertCliente(cliente: Cliente) {

    return this.http.post<Respuesta>(this.baseUrl + "cliente/", cliente, this.HttpOptions);
  
  } */



}



