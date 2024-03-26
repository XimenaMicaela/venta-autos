import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  tituloPagina = "Registro del Cliente";
  cliente = { nombre: "", password: "", telefono: "", email: "" };
  quiereContacto: boolean = false;


  constructor(private _router: Router,) { }

  ngOnInit() {
  }

  goInicio(): void {
    this._router.navigate(['/inicio']);
  }

  registra(): void {
    alert("Cliente Registrado con exito en CONSTRUCCION");
    this._router.navigate(["/autos"]);
  }



}
