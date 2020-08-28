import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  edad1: number;
  edad2: number;

  resultadoSuma: number;
  resultadoPromedio: number;

  calcular() {
    this.resultadoSuma = Number(this.edad1) + Number(this.edad2);
    this.resultadoPromedio = this.resultadoSuma / 2;
  }

  borrar() {
    this.edad1 = null;
    this.edad2 = null;
    this.resultadoSuma = null;
    this.resultadoPromedio = null;
  }
}
