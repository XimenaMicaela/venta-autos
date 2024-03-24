import { Component, Input, OnInit } from '@angular/core';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import Swal from 'sweetalert2';

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
   this.consultarVehiculos();
   /* this.listaVehiculos = this.vehiculoService.getvehiculos(); */
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

  consultarVehiculos(){
    this.vehiculoService.getVehiculos().subscribe(respuesta =>{
      console.log(respuesta );
      this.listaVehiculos = respuesta;
     });

  }

  eliminar(codigo: string){
    Swal.fire({
      title: "Estas seguro que deseas eliminar este registro?",
      showCancelButton: true,
      confirmButtonText: "Si",
      cancelButtonText: "No",
      icon: "question"
    }).then((res)=>{
      if(res.isConfirmed){
        this.vehiculoService.eliminarVehiculo(codigo).subscribe(data =>{
          if (data.codigo == '1'){
            this.consultarVehiculos();
            Swal.fire({
              title: "Mensaje",
              text: "Vehiculo eliminado con exito",
              icon: "success"
            });

          }
        });
      }
    });
  }
}
