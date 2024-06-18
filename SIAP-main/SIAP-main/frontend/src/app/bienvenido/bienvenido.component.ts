import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from '../alertas/alertas.service'; // Asegúrate de importar el servicio AlertasService

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent {
  constructor(private router: Router, private alertasService: AlertasService) {}


  irANuevaPagina() {
    this.router.navigate(['/bienvenido']); // Redirige a la página 'bienvenido'
  }

  ngOnInit(): void {
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
