import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { ClaseUnoComponent } from './componentes/clase-uno/clase-uno.component';
import { ControlEntidadComponent } from './componentes/control-entidad/control-entidad.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'bienvenido', component: BienvenidaComponent },
  { path: 'claseuno', component: ClaseUnoComponent },
  { path: 'entidad/listado', component: ControlEntidadComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
