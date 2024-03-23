import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { ActivatedRoute } from '@angular/router';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validadorCodigo } from '../../validaciones/VehiculoValidaciones';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-PagVehiculo',
  templateUrl: './PagVehiculo.component.html',
  styleUrls: ['./PagVehiculo.component.css']
})
export class PagVehiculoComponent implements OnInit {
  vehiculo?: Vehiculo;
  formulario: FormGroup;


  constructor(
    private vehiculoService: VehiculoService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
  ) {

    this.formulario = this.formBuilder.group({
      "codigo": ['', [Validators.required, validadorCodigo()]],
      "marca": ['', [Validators.required]],
      "modelo": ['', [Validators.required]],
      "anio": ['', [Validators.required]],
      "color": [],
      "kilometraje": ['', [Validators.required]],
      "Precio": [],
      "calificacion": ['', [Validators.required]]

    });
    this.formulario.controls['codigo'].disable();
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.vehiculoService.getVehiculo(params['codigo']).subscribe(data => {
        if (data.codigo == '1') {
          this.vehiculo = data.data;
          this.formulario.controls['codigo'].setValue(this.vehiculo?.codigo);
          this.formulario.controls['marca'].setValue(this.vehiculo?.marca);
          this.formulario.controls['modelo'].setValue(this.vehiculo?.modelo);
          this.formulario.controls['anio'].setValue(this.vehiculo?.anio);
          this.formulario.controls['precio'].setValue(this.vehiculo?.precio);
          this.formulario.controls['calificacion'].setValue(this.vehiculo?.calificacion);
          this.formulario.controls['kilometraje'].setValue(this.vehiculo?.kilometraje);

        }else{
          Swal.fire({
            title:"Mensaje de alerta",
            text: "No se pudo cargar la informacion",
            icon: "error",

          })
        }
      })
    })
    /*  this.activedRoute.params.subscribe(param =>{
       let codigo = param['codigo'];
       this.vehiculoService.getVehiculo */

  };


guardar(){
  if(this.formulario.valid){
    let codigo =  this.vehiculo?.codigo;
    this.vehiculoService.actualizarVehiculo({...this.formulario.value}, this.formulario.controls['codigo'].value).subscribe(data =>{
      if(data.codigo == '1'){
        Swal.fire(
          {
            title: "Mensaje",
            text: "vehiculo actualizado con exito",
            icon: "info"
          }
        );
      }

    });
  }else{
    Swal.fire(
      {
        title: "Mensaje",
        text: "faltan llenar campos",
        icon: "error"
      }
    );

  }

}

imprimir(data: any){
  console.log('Calificacion:', data)
}

}
