import { Component, OnInit } from '@angular/core';
/* import { Vehiculo } from '../../utilitarios/modelos/Vehiculo'; */
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { validadorCodigo } from '../../validaciones/VehiculoValidaciones';

@Component({
  selector: 'app-PagVehiculoRegistro',
  templateUrl: './PagVehiculoRegistro.component.html',
  styleUrls: ['./PagVehiculoRegistro.component.css']
})
export class PagVehiculoRegistroComponent implements OnInit {
  formulario: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private vehiculoService: VehiculoService,
    
    
  ) {

    this.formulario = this.formBuilder.group({
      "codigo": ['', [Validators.required, validadorCodigo()]],
      "marca": ['', [Validators.required]],
      "modelo": ['', [Validators.required]],
      "anio": ['', [Validators.required]],
      "color": [],
      "kilometraje": ['', [Validators.required]],
      "precio": [],
      "calificacion": ['', [Validators.required]]

    });
  }

  ngOnInit() {
   
  }

  guardar() {
    /* let vehiculo: Vehiculo = {...this.formulario.value};
    this.vehiculoServicio.addvehiculo(vehiculo);
    console.log('Formulario' , this.formulario); */
    if (this.formulario.valid) {
      console.log(this.formulario.value);
      
      this.vehiculoService.insertVehiculo({ ...this.formulario.value }).subscribe(
        respuesta => {
          if (respuesta.codigo == '1') {
            Swal.fire({
              title: "Mensaje",
              text: "Vehiculo registrado con exito",
              icon: "success"
            }).then(res => {
              this.formulario.reset();
            })
          } else {
            Swal.fire({
              title: "Mensaje",
              text: "No se pudo registrar el vehiculo:" + respuesta.mensaje,
              icon: "error"
            });

          }
        }
      );

    } else {
      Swal.fire({
        title: "Mensaje",
        text: "Faltan llenar campos",
        icon: "error"
      });
    }
  }
}

/* export function validadorCodigo(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const codigoV = /^[A-Z]\d{4}$/;
    let value = control.value
    if (codigoV.test(value)) {
      return null;
    }
    return { 'codigoValidate': true };

  }
} */
export function validadorCodigoComparativo() {
  return (formulario: FormGroup): ValidationErrors | null => {
    let valor = formulario.controls['codigo'].value;
    let valor2 = formulario.controls['codigo_confirm'].value;
    if (valor === valor2) {
      return null;
    }
    return { 'codigo comparativo': true };
  }

}

