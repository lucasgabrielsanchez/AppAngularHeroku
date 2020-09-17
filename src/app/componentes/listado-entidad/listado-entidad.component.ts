import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.css'],
})
export class ListadoEntidadComponent implements OnInit {
  @Input() listadoInput: [];
  @Output() entidadElegida: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  emitirEntidad(persona: any) {
    this.entidadElegida.emit(persona);
  }
}
