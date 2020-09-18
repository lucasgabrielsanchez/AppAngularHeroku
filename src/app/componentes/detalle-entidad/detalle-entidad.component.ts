import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detalle-entidad',
  templateUrl: './detalle-entidad.component.html',
  styleUrls: ['./detalle-entidad.component.css'],
})
export class DetalleEntidadComponent implements OnInit {
  @Input() entidadInput: any;
  @Output() reEmitirEntidad: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  reEmitirEntidadEliminar(entidad: any) {
    console.log('entidad: ', entidad);

    this.reEmitirEntidad.emit(entidad);
  }
}
