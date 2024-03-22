import { Component, Input, OnInit } from '@angular/core';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';

@Component({
  selector: 'app-PagListaVehiculos',
  templateUrl: './PagListaVehiculos.component.html',
  styleUrls: ['./PagListaVehiculos.component.css']
})
export class PagListaVehiculosComponent implements OnInit {
  constructor(
    private vehiculoService: VehiculoService,
  ) { }
   public mostrarImagen = false;
   public listaVehiculos : Array<Vehiculo> = [];
  //filtro: string ="";
  private _filtro: string = '';
  get filtro(){
    return this._filtro;
  }

  set filtro(filtro: string){
    this._filtro = filtro;
    /* this.consultaVehiculos(); */

  }

 /*  @Input() valor: string = '';
  listaVehiculos: Array<any>= []; */


  ngOnInit() { 
   /*  this.consultaVehiculos(); */
   console.log('Ingreso a ejecutarse');
   /* this.listaVehiculos = this.vehiculoService.getvehiculos(); */
   this.vehiculoService.getVehiculos().subscribe(respuesta =>{
    console.log(respuesta );
    this.listaVehiculos = respuesta;
   });
  }
   mostrar(){
    this.mostrarImagen = !this.mostrarImagen}
 

 /*  consultaVehiculos(){
    this.vehiculoService.getvehiculos(this.filtro).subscribe(data =>{
      this.listaVehiculos = data;

    });

  }
   */
  recepcion(dato: number){
    console.log('Dato:',dato);
  }

 
}
