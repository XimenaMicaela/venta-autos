import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../servicios/Cliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Cliente } from '../../utilitarios/modelos/Cliente';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class clientesComponent implements OnInit {
  cliente?: Cliente;
  formulario: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private ClienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
   
    
    
  ) {

    this.formulario = this.formBuilder.group({
      "id": ['', [Validators.required]],
      "nombre": ['', [Validators.required]],
      "apellido": ['', [Validators.required]],
      "password": [''],
      "telefono": [],
      "email": [''],
    

    });
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.ClienteService.getCliente(params['codigo']).subscribe(data => {
        if (data.codigo == '1') {
          this.cliente = data.data;
          this.formulario.controls['id'].setValue(this.cliente?.id);
          this.formulario.controls['nombre'].setValue(this.cliente?.nombre);
          this.formulario.controls['apellido'].setValue(this.cliente?.apellido);
          this.formulario.controls['password'].setValue(this.cliente?.password);
          this.formulario.controls['email'].setValue(this.cliente?.email);
          this.formulario.controls['telefono'].setValue(this.cliente?.telefono);
          

        } else {
          Swal.fire({
            title: "Mensaje de alerta",
            text: "No se pudo cargar la informacion",
            icon: "error",

          })
        }
      })
    })
   
  }

  guardarCliente() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
      
      this.ClienteService.insertCliente({ ...this.formulario.value }).subscribe(
        respuesta => {
          if (respuesta.codigo == '1') {
            Swal.fire({
              title: "Mensaje",
              text: "Cliente registrado con exito",
              icon: "success"
            }).then(res => {
              this.formulario.reset();
            })
          } else {
            Swal.fire({
              title: "Mensaje",
              text: "No se pudo registrar el cliente:" + respuesta.mensaje,
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

