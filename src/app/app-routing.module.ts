import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { PagListaVehiculosComponent } from './paginas/PagListaVehiculos/PagListaVehiculos.component';
import { PagVehiculoComponent } from './paginas/PagVehiculo/PagVehiculo.component';
import { PagVehiculoRegistroComponent } from './paginas/PagVehiculoRegistro/PagVehiculoRegistro.component';
import { ClientesComponent } from './paginas/Clientes/Clientes.component';


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "vehiculos",
    component: PagListaVehiculosComponent

  },

  {
    path: "Clientes",
    component:ClientesComponent
    

  },


 
  {
    path: "vehiculo",
    component: PagVehiculoRegistroComponent


  },
  {
    path: "vehiculo/:codigo",
    component: PagVehiculoComponent

  },


  {
    path: "",
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: "**",
    component: HomeComponent,
    pathMatch: 'full'
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
