import { Component, OnInit } from '@angular/core';
import { EntidadesService } from '../../servicios/entidades.service';

@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.css'],
})
export class ControlEntidadComponent implements OnInit {
  listadoEntidad: [];
  entidadSeleccionada: any;

  constructor(private _entidadesService: EntidadesService) {}

  ngOnInit(): void {
    this._entidadesService.obtenerEntidades().subscribe((resultado) => {
      this.listadoEntidad = resultado;
    });
  }

  manejarEntidadElegida(entidad: any) {
    this.entidadSeleccionada = entidad;
  }
}
