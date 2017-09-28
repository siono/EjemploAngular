import { Injectable } from '@angular/core';

import {Contacto} from './contacto';

// Para hacer la inyección de dependencias de un servicio
// debemos hacerlo en el constructor de la clase. Anotamos
// un parámetro con el tipo de servicio a inyectar y
// añadimos el modificador de acceso correspondiente al
// parámetro.
@Injectable()
export class ContactosService {

  private _nombres: Contacto[] = [
    new Contacto(1, 'Steve', 'Jobs'),
    new Contacto(2, 'Steve', 'Wozniak'),
    new Contacto(3, 'Bill', 'Gates'),
    new Contacto(4, 'Sundar', 'Pichai'),
    new Contacto(5, 'Elon', 'Musk'),
    new Contacto(6, 'Bob', 'Esponja')
  ];

  obternerContactos(): Contacto[] { 
    return this._nombres;
  }

  agregarContacto(contacto: Contacto){
    this._nombres.push(contacto);
  }

  eliminarContacto(nombre: Contacto): void {
    // Para eliminar un contacto lo que hacemos es
    // filtrar la colección y quedarnos con todos
    // aquellos que no sean el indicado.
    this._nombres = this._nombres.filter(function(n) {
       return n.id !== nombre.id;
    });
  }

}
