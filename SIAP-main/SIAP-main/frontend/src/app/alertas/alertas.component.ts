import { Component, OnInit } from '@angular/core';
import { AlertasService } from './alertas.service';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css'],
})
export class AlertasComponent implements OnInit {
  alertas: any = {}; // Objeto para almacenar las alertas recibidas del servicio

  constructor(private alertasService: AlertasService) {}

  ngOnInit(): void {
    this.obtenerAlertas();
  }

  obtenerAlertas(): void {
    this.alertasService.obtenerAlertas().subscribe(
      (data) => {
        this.alertas = data;
        this.alertasService.actualizarAlertas(data); // Actualizar alertas en el servicio
        console.log('Alertas actualizadas en el componente:', this.alertas);
      },
      (error) => {
        console.error('Error al obtener alertas:', error);
      }
    );
  }

  hayAlertas(): boolean {
    return this.alertasService.hayAlertas();
  }

  getAlertas(): any {
    return this.alertasService.getAlertas();
  }
}
