import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import{InicioComponent}from'./inicio/inicio.component';
import{LoginComponent}from'./login/login.component';
import{CompraComponent}from'./compra/compra.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
 {path: 'login', component:LoginComponent},
  {path:  'lista', component:ListaProductoComponent},
  {path: 'detalle/:id', component: DetalleProductoComponent},
  {path: 'compra', component:CompraComponent },
  {path: 'nuevo', component: NuevoProductoComponent},
  {path: 'editar/:id', component: EditarProductoComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
