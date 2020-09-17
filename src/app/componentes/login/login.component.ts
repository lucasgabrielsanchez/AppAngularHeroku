import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: Usuario;

  constructor(private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {}

  login() {
    console.log(this.usuario);

    if (this.usuario.nombre && this.usuario.clave) {
      if (
        this.usuario.nombre === 'user_prueba' &&
        this.usuario.clave === '55558888'
      ) {
        this.router.navigate(['bienvenido']);
      } else {
        this.router.navigate(['error']);
      }
    }
  }

  cargar() {
    this.usuario.nombre = 'user_prueba';
    this.usuario.clave = '55558888';
  }
}
