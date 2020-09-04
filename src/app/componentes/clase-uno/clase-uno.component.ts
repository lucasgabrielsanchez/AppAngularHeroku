import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase-uno',
  templateUrl: './clase-uno.component.html',
  styleUrls: ['./clase-uno.component.css'],
})
export class ClaseUnoComponent implements OnInit {
  edad1: number;
  edad2: number;

  resultadoSuma: number;
  resultadoPromedio: number;

  constructor() {}

  ngOnInit(): void {}

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
