import { Component, OnInit } from '@angular/core';
import { EntidadesService } from '../../servicios/entidades.service';

@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.css'],
})
export class ControlEntidadComponent implements OnInit {
  listadoEntidad: any;
  listadoEntidadBorrada: any;
  entidadSeleccionada: any;

  constructor(private _entidadesService: EntidadesService) {}

  ngOnInit(): void {
    this._entidadesService.obtenerEntidades().subscribe((resultado) => {
      this.listadoEntidad = resultado;
      this.listadoEntidadBorrada = JSON.parse(
        JSON.stringify(this.listadoEntidad)
      );
    });
  }

  manejarEntidadElegida(entidad: any) {
    this.entidadSeleccionada = entidad;
  }

  eliminarEntidad(entidad: any) {
    this.entidadSeleccionada = null;

    let removeIndex = this.listadoEntidadBorrada
      .map(function (item) {
        return item.id;
      })
      .indexOf(entidad.id);

    if (removeIndex > -1) {
      this.listadoEntidadBorrada.splice(removeIndex, 1);
    }
  }
}
