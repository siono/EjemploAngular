import { Component } from '@angular/core';

//Con el decorador '@Component' otorgamos a la clase 
//decorada comportamiento de componente
@Component({
  //El metadato 'selector' indica el selector CSS encargado 
  //de seleccionar el elemento HTML en el cual instanciar 
  // el componente.
  selector: 'app-root',
  // El 'templateUrl' indicamos la ruta al template (documetno HTML)
  //asociado al componente.
  templateUrl: './app.component.html',
  // En 'styleUrl' indicamos la/s ruta/s de las hojas de estilo que aplican
  // SOLO al componente.
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
}
