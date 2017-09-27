import { Injectable } from '@angular/core';

// Para hacer la inyección de dependencias de un servicio
// debemos hacerlo en el constructor de la clase. Anotamos
// un parámetro con el tipo de servicio a inyectar y
// añadimos el modificador de acceso correspondiente al
// parámetro.
@Injectable()
export class ContactosService {

  private _nombres: string[] = [
    "Steve Jobs",
    "Steve Wozniak",
    "Bill Gates",
    "Sundar Pichai",
    "Elon Musk",
    "Bob Esponja"
  ];

  obternerContactos(): string[] { 
    return this._nombres;
  }

  eliminarContacto(nombre: string): void {
    // Para eliminar un contacto lo que hacemos es
    // filtrar la colección y quedarnos con todos
    // aquellos que no sean el indicado.
    this._nombres = this._nombres.filter(function(n) {
       return n !== nombre;
    });
  }

}
