import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Contacto} from '../contacto';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent {

  formulario: FormGroup;
  @Output() botonGuardarPulsado= new EventEmitter<Contacto>();

  constructor(private _formBuilder: FormBuilder) { 
    this.crearFormulario();
  }

  private crearFormulario(): void{
    //Para crear un nueo 'FormGroup0 debemos indicar en un objeto JSON
    //las propiedades que recogeremos del formulario HTML
    this.formulario = this._formBuilder.group({
      nombre: ['',Validators.required],
      apellidos: ['',Validators.required]
    });
  }

  notificarGuardadoContacto():void {
    // Tenemos disponible los valroes que el usuario indica en un 
    // formulario a través de la propiedad 'value' del 'FormGroup'
    const contacto: Contacto = this.formulario.value as Contacto;
    this.botonGuardarPulsado.emit(contacto)
  }

}
