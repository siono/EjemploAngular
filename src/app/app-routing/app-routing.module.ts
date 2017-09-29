import { RutaBComponent } from '../ruta-b/ruta-b.component';
import { RutaAComponent } from '../ruta-a/ruta-a.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const rutas: Routes = [
  {
    path: 'lista-contactos',
    component: RutaAComponent
  },
  {
    path: 'nuevo-contacto',
    component: RutaBComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/lista-contactos'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
