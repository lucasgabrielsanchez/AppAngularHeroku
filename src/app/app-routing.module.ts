import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { ClaseUnoComponent } from './componentes/clase-uno/clase-uno.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'claseuno', component: ClaseUnoComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
