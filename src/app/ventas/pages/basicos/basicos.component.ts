import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower: string = "javier";
  nombreUpper: string = "JAVIER";
  nombreCompleto: string ="jaViEr sAnCHez";

  fecha: Date = new Date(); // Fecha de hoy
  

}
