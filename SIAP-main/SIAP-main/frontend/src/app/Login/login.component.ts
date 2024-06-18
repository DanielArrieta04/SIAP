import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    CorreoElectronico: '',
    Contrasena: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {}

  logIn() {
    this.authService.singin(this.user).subscribe((success: boolean) => {
      if (success) {
        Swal.fire({
          title: '¡Éxito!',
          text: 'Inicio de sesión correcto.',
          icon: 'success',
          confirmButtonText: 'Continuar',
        }).then(() => {
          this.router.navigate(['/bienvenido']);
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Ocurrió un error. Por favor intente nuevamente.',
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
      }
    }, (error) => {
      Swal.fire({
        title: 'Error',
        text: 'Ocurrió un error. Por favor intente nuevamente.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
      console.error('Error en el inicio de sesión:', error);
    });
  }
}
