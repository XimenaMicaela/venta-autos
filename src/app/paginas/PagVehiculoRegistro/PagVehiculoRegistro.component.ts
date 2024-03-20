import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-PagVehiculoRegistro',
  templateUrl: './PagVehiculoRegistro.component.html',
  styleUrls: ['./PagVehiculoRegistro.component.css']
})
export class PagVehiculoRegistroComponent implements OnInit {
  formulario: FormGroup;
  constructor(
   private vehiculoServicio: VehiculoService,
    private formBuilder: FormBuilder
  ) {
 
    this.formulario = this.formBuilder.group({
      "codigo": ['', [Validators.required, validadorCodigo()]],
      "codigo_confirm": [],
      "marca": ['', [Validators.required]],
      "modelo":['', [Validators.required]],
      "anio":[],
      "color":[],
      "kilometraje": [],
      "Precio":[],
      "calificacion": []

    },{
      validators: validadorCodigoComparativo()
    });
   }

  ngOnInit() {
  }

  guardar(){
    let vehiculo: Vehiculo = {...this.formulario.value};
    this.vehiculoServicio.addvehiculo(vehiculo);
    console.log('Formulario' , this.formulario);
    if(this.formulario.valid){
      alert(('Grabado con exito'));
    }else{
      alert(('Te faltan campos por llenar'));
    }
  }
}

export function validadorCodigo(): ValidatorFn{
  return (control: AbstractControl): ValidationErrors|null=>{
    const codigoV = /^[A-Z]\d{4}$/;
    let value= control.value
    if (codigoV.test(value)){
      return null;
    }
    return {'codigoValidate': true};
   
  }
  }
  export function validadorCodigoComparativo(){
    return (formulario: FormGroup): ValidationErrors|null=>{
      let valor = formulario.controls['codigo'].value;
      let valor2 = formulario.controls['codigo_confirm'].value;
      if(valor === valor2){
        return null;
      }
      return {'codigo comparativo': true};
    }
    
  }

