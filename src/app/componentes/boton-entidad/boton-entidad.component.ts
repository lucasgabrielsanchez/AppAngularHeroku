import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton-entidad',
  templateUrl: './boton-entidad.component.html',
  styleUrls: ['./boton-entidad.component.css'],
})
export class BotonEntidadComponent implements OnInit {
  @Input() botonEntidadInput: any;
  @Output() entidadEliminar: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  emitirEntidadEliminar() {
    this.entidadEliminar.emit(this.botonEntidadInput);
  }
}
