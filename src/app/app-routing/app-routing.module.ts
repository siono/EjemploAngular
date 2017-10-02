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

// Debemos importar en el módulo de routing uno nuevo creado a partir
// de 'RouterModule'. Este nuevo módulo contendrá el Router y las
// directivas necesarias para gestionar las rutas definidas más arriba.
// Además, hacemos export de 'RouterModule' para evitar tener que
// importarlo explícitamente en el módulo 'AppModule'.

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
