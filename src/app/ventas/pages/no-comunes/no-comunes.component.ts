import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Maca';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Maca', 'Hernando', 'Eduardo'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente(){
    this.nombre = 'Javier';
    this.genero = 'masculino';
  }

  borrarCliente(){
    this.clientes.shift();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Javier',
    edad: 35,
    direccion: 'Ottawa, Canadá'
  };

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ];

  // Async Pipe

  miObservable = interval(5000);

  valorPromesa = new Promise( (resolve, reject) => {

    setTimeout( () => {
      resolve( 'Tenemos data de promesa');
    }, 3500);

  });

}
