import { Injectable } from '@angular/core';
import { Vehiculo } from '../utilitarios/modelos/Vehiculo';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

constructor(private http: HttpClient) { }
baseUrl = "http://www.epico.gob.ec/vehiculo/public/api/";

// Todos vehiculos => GET vehiculos/
//Insert => POST vehiculo/
//Update => PUT vehiculo/
// Delete => DELETE vehiculo/:codigo
// Consulta => GET vehiculo/codigo


/*  getvehiculos(filtro:any): Observable<Array<Vehiculo>> {
  const escucha: Observable<Array<Vehiculo>> = new Observable(escuchando => {
    let lista = this.listaVehiculos.filter(elem => elem.marca.toLowerCase().includes(filtro.toLowerCase()));
    escuchando.next(lista); 
   });

  return escucha;
}  */

getVehiculos(): Observable<Vehiculo[]>{
  return this.http.get<Respuesta>(this.baseUrl+"vehiculos/").pipe(
    map(respuesta => respuesta.data )
  );
}

insertVehiculo(vehiculos: Vehiculo){
  let HttpOptions = {
    headers: new HttpHeaders({'Content-type':'aplication/json'})
  };
 /*  let body = new HttpParams();
  body = vehiculos.codigo ? body.set('codigo', vehiculos.codigo): body;
  body = vehiculos.marca ? body.set('marca', vehiculos.marca): body;
  body = vehiculos.modelo ? body.set('modelo', vehiculos.modelo): body;
  body = vehiculos.anio ? body.set('anio', vehiculos.anio): body;
  body = vehiculos.calificacion ? body.set('calificacion', vehiculos.calificacion): body;
  body = vehiculos.foto ? body.set('foto', vehiculos.foto): body; */
  return this.http.post<Respuesta>(this.baseUrl+"vehiculo/", vehiculos,HttpOptions);

}

getVehiculo(codigo:string): Observable<Vehiculo|undefined>{
  const escucha: Observable<Vehiculo | undefined> = new Observable(escuchando => {
    setTimeout(()=>{
      let vehiculo = this.listaVehiculos.find(ele => ele.codigo === codigo);
    escuchando.next(vehiculo); //next,error,complete
    },1000);
   });
 
  return escucha;
}
addvehiculo(vehiculo:Vehiculo){
  this.listaVehiculos.push(vehiculo);

}

private  listaVehiculos : Array<Vehiculo> = [
  {"codigo":"A001","marca":"CHEVROLET", "modelo": "ONIX-6", "color": "azul","kilometraje": "50000","precio":17000,"foto": "https://cdn.dribbble.com/users/4206454/screenshots/11169759/media/b26453c2c57f2b5656dec566bbf8ed92.jpg", "anio":2009, "calificacion": 3},
  {"codigo":"A002","marca":"KIA", "modelo": "RIO-2", "color": "azul","kilometraje": "50000","precio":17000,"foto": "https://mystickermania.com/cdn/stickers/gudetama/gudetama-butterfly-512x512.png", "anio":2009, "calificacion": 3},
  {"codigo":"A003","marca":"CHERY", "modelo": "ARRIZO-5", "color": "azul","kilometraje": "50000","precio":17000,"foto": "https://mystickermania.com/cdn/stickers/gudetama/gudetama-butterfly-512x512.png", "anio":2009, "calificacion": 4},
  {"codigo":"A004","marca":"TOYOTA", "modelo": "AGYA-1", "color": "azul","kilometraje": "50000","precio":17000,"foto": "https://mystickermania.com/cdn/stickers/gudetama/gudetama-butterfly-512x512.png", "anio":2009, "calificacion":5 },
  {"codigo":"A005","marca":"HYUNDAI", "modelo": "ACCENT-7", "color": "azul","kilometraje": "50000","precio":17000,"foto": "https://mystickermania.com/cdn/stickers/gudetama/gudetama-butterfly-512x512.png", "anio":2009, "calificacion": 4},
  {"codigo":"A006","marca":"HYUNDAI", "modelo": "ACCENT-7", "color": "azul","kilometraje": "50000","precio":17000,"foto": "https://mystickermania.com/cdn/stickers/gudetama/gudetama-butterfly-512x512.png", "anio":2009, "calificacion": 4}
]

}

 /* export interface Vehiculo{
  codigo: string;
  marca: string;
  color?: string;
  modelo?: string;
  kilometraje?: string;
  precio?: number;
  foto?: string| null;
  anio?: number;
  calificacion?: number;
}  */

export interface Respuesta {
  codigo: string;
  mensaje: string;
  /* data: any;  */
  data: Array<Vehiculo>|Vehiculo| any;   
}

