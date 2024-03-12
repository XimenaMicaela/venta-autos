import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { ActivatedRoute } from '@angular/router';
import { VehiculoService } from '../../servicios/Vehiculo.service';

@Component({
  selector: 'app-PagVehiculo',
  templateUrl: './PagVehiculo.component.html',
  styleUrls: ['./PagVehiculo.component.css']
})
export class PagVehiculoComponent implements OnInit {
  vehiculo?:Vehiculo = {
    codigo:"",
    marca:"",
    modelo:"",
    color: "",
    calificacion:0,
    precio: 0,
    kilometraje :"",
    foto: "",
    anio:0
    

  };

  constructor(
    private route:ActivatedRoute,
    private vehiculoService: VehiculoService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.vehiculoService.getVehiculo(params['codigo']).subscribe(data => {
        this.vehiculo= data;
      });
      //this.vehiculo= this.vehiculoService.getVehiculo(params['codigo'])
    });
  }

  imprimir(data: any){
    console.log('Calificacion:', data)
  }

}
