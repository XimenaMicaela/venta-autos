import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-PagClientes',
  templateUrl: './PagClientes.component.html',
  styleUrls: ['./PagClientes.component.css']

})
export class PagClientesComponent implements OnInit {
  tituloPagina = "Registro del Cliente";
  cliente = { nombre: "", password: "", telefono: "", email: "" };
  Contacto: boolean = false;

  constructor(private _router: Router,) { }
  ngOnInit(): void {
  } goInicio(): void {
    this._router.navigate(['/inicio']);
  }
  registra(): void {
    alert("En construccion");
    this._router.navigate(["/autos"]);
  }

}

