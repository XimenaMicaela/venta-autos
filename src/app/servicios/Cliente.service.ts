import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../utilitarios/modelos/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

constructor(private http: HttpClient) { }
baseUrl = "http://epico.gob.ec/cliente/public/api/";
  HttpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
  };


  insertCliente(cliente: Cliente) {

    return this.http.post<RespuestaC>(this.baseUrl + "cliente/", cliente, this.HttpOptions);
  
  }



}



export interface RespuestaC {
  codigo: string;
  mensaje: string;
  data: Array<Cliente> |Cliente  | any;

}




