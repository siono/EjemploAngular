import { Contacto } from './contacto';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datosContacto'
})
export class DatosContactoPipe implements PipeTransform {

  transform(value: Contacto): string {
    let datos: string;
    
    //Si tenemos tanto email como movil
    if (value.email && value.movil){
      datos = `${value.movil} | ${value.email}`

    //Si solo tenemos email
    }else if(value.email){
      datos = value.email;
    }

    //si solo tenemos movil
    else if(value.movil){
      datos = value.movil;
    }

    //Si no tenemos ni uno ni otro
    else{
      datos = '';
    }

    return datos;

  }

}
