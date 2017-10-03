import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

import { ContactosService } from '../contactos.service';
import { Contacto } from '../contacto';

@Component({
  templateUrl: './ruta-a.component.html',
  styleUrls: ['./ruta-a.component.css']
})
export class RutaAComponent implements OnInit {

  nombres: Contacto[];
  contactoSeleccionado: Contacto;

  //Para la versión 2. Creamos observable.
  contactos$: Observable<Contacto[]>;

  // Para hacer la inyección de dependencias de un servicio
  // debemos hacerlo en el constructor de la clase. Anotamos
  // un parámetro con el tipo de servicio a inyectar y
  // añadimos el modificador de acceso correspondiente al
  // parámetro.
  constructor(private _contactosService: ContactosService) { }

  // El hook 'OnInit' se ejecuta cuando el componente tiene
  // asociado su template correspondiente, por tanto es el
  // momento ideal para enlazar datos entre ellos.
  ngOnInit(): void {
    //Opción 1: Suscripción manual al observable.
    /* this._contactosService.obtenerContactos().subscribe((contactos: Contacto[])=>{
      this.nombres= contactos;
    }); */

    //Opción 2: Suscripcion automatica al observable con la ayuda del pipe Async (en ruta-a.component.html)
    this.contactos$ = this._contactosService.obtenerContactos();
  }

  eliminarContacto(nombre: Contacto): void {
    this._contactosService.eliminarContacto(nombre);
    //this.nombres = this._contactosService.obtenerContactos();
  }

  verDetalles(nombre: Contacto): void {
    this.contactoSeleccionado = nombre;
  }

  verPerfil(ruta: string): void{
    window.open(ruta, '_blank');
  }

}