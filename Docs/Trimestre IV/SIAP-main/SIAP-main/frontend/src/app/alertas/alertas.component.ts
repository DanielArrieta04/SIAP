import { Component, OnInit } from '@angular/core';
import { AlertasService } from './alertas.service';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css'],
})
export class AlertasComponent implements OnInit {
  alertas: any[] = [];

  constructor(private alertasService: AlertasService ) {}

  ngOnInit(): void {
    this.obtenerAlertas();
  }

  obtenerAlertas(): void {
    this.alertasService.obtenerAlertas().subscribe(
      (data) => {
        this.alertas = data;
        this.alertasService.actualizarAlertas(data);
      },
      (error) => {
        console.error('Error al obtener alertas', error);
      }
    );
  }

  obtenerAlertasAA(): void {
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
