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
  public listaVehiculos: Array<Vehiculo> = [];
  //filtro: string ="";
  /* private _filtro: string = ''; */
  public rows: number = 10;
  public page: number = 1;
  public pages: number = 0;

  public filtro: string ="";


 /*  get filtro() {
    return this._filtro;
  }

  set filtro(filtro: string) {
    this._filtro = filtro;
      ... no va en el original this.consultaVehiculos(); 

  } */

  /*  @Input() valor: string = '';
   listaVehiculos: Array<any>= []; */


  ngOnInit() {
    /*  this.consultaVehiculos(); */
    console.log('Ingreso a ejecutarse');
    this.consultarVehiculos();
    /* this.listaVehiculos = this.vehiculoService.getvehiculos(); */
  }
  mostrar() {
    this.mostrarImagen = !this.mostrarImagen
  }


  /*  consultaVehiculos(){
     this.vehiculoService.getvehiculos(this.filtro).subscribe(data =>{
       this.listaVehiculos = data;
 
     });
 
   }
    */
  recepcion(dato: number) {
    console.log('Dato:', dato);
  }

  consultarVehiculos() {
    this.vehiculoService.getVehiculos(this.filtro, this.rows , this.page).subscribe(respuesta => {
      /* console.log(respuesta); */
      if (respuesta.codigo == "1") {
        this.listaVehiculos = respuesta.data;
        this.pages = respuesta.pages;
        this.paginar(respuesta.pages);
        
      }
      
    });

  }

  cambiarpagina(pagina: number){
    this.page = pagina;
    this.consultarVehiculos();

  }

  listaPaginas: Array<number> = [];
  paginar(pages: number){
    this.listaPaginas = [];
    for (let i = 1 ; i < pages; i++) {
      this.listaPaginas.push(i);
      
    }


  }

  siguiente(){
    if(this.page < this.pages){
      this.page++;
      this.consultarVehiculos();
    }
  }

  atras(){
    if(this.page > 1){
      this.page--;
      this.consultarVehiculos();
    }
  }

  eliminar(codigo: string) {
    Swal.fire({
      title: "Estas seguro que deseas eliminar este registro?",
      showCancelButton: true,
      confirmButtonText: "Si",
      cancelButtonText: "No",
      icon: "question"
    }).then((res) => {
      if (res.isConfirmed) {
        this.vehiculoService.eliminarVehiculo(codigo).subscribe(data => {
          if (data.codigo == '1') {
            this.consultarVehiculos();
            Swal.fire({
              title: "Mensaje",
              text: "Vehiculo eliminado con exito",
              icon: "success"
            });

          }
        });
      } else {
        Swal.fire({
          title: "Mensaje",
          text: "No se pudo eliminar vehiculo",
          icon: "error"
        });

      }
    });
  }



}