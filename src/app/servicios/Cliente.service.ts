import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../utilitarios/modelos/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

constructor(private http: HttpClient) { }
baseUrl = "https://epico.gob.ec/vehiculo/public/api/";
  /* HttpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
  }; */


  insertCliente(cliente: Cliente) {

    return this.http.post<RespuestaC>(this.baseUrl + "cliente/", cliente);
  
  }
  getCliente(codigo: string) {
    return this.http.get<RespuestaC>(this.baseUrl + "cliente/" + codigo)
  }



}

  



export interface RespuestaC {
  codigo: string;
  mensaje: string;
  data: Array<Cliente> |Cliente  | any;

}




