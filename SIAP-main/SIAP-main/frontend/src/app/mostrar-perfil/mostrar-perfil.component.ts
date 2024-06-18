import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Agrega esta importación
import { AuthService } from '../services/auth.service';
import { AlertasService } from 'src/app/alertas/alertas.service'; // Asegúrate de importar el servicio AlertasService


@Component({
  selector: 'app-mostrar-perfil',
  templateUrl: './mostrar-perfil.component.html',
  styleUrls: ['./mostrar-perfil.component.css']
})
export class MostrarPerfilComponent {
  user: any;

  constructor(private authService: AuthService, private router: Router, private alertasService: AlertasService) {} // Agrega `router` aquí

  ngOnInit() {
    this.user = this.authService.getUser();
  }

  logout() {
    this.authService.logout();
    if (!this.authService.isAuth()) {
      // Redireccionar al usuario a la página de inicio de sesión u otra página relevante
      this.router.navigate(['/login']);
    }
  }
  
  isAuth(): boolean {
    return this.authService.isAuth();
  }

  ngOnInitMostrarPerfil(): void {
    this.obtenerAlertas();
  }

  obtenerAlertas(): void {
    this.alertasService.obtenerAlertas().subscribe(
      (alertas) => {
        this.alertasService.actualizarAlertas(alertas);
      },
      (error) => {
        console.error('Error al obtener alertas:', error);
      }
    );
  }

  hayAlertas(): boolean {
    return this.alertasService.hayAlertas();
  }

  getAlertas(): any[] {
    return this.alertasService.getAlertas();
  }

}
