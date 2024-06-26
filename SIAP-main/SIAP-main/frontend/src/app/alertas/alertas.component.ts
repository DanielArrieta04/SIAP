import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AlertasService } from './alertas.service';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css'],
})
export class AlertasComponent implements OnInit {
  alertas: any = {}; // Objeto para almacenar las alertas recibidas del servicio

  constructor(private alertasService: AlertasService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.obtenerAlertas();
  }

  obtenerAlertas(): void {
    this.alertasService.obtenerAlertas().subscribe(
      (data) => {
        console.log('Datos recibidos del servicio:', data); // Verificar datos recibidos
        this.alertas = data;
        this.alertasService.actualizarAlertas(data); // Actualizar alertas en el servicio
        this.cd.detectChanges(); // Forzar la detección de cambios
        console.log('Alertas actualizadas en el componente:', this.alertas);
      },
      (error) => {
        console.error('Error al obtener alertas:', error);
      }
    );
  }

  hayAlertas(): boolean {
    return (
      this.alertas &&
      (
        (this.alertas.proximosAVencer && this.alertas.proximosAVencer.length > 0) ||
        (this.alertas.bajoStock && this.alertas.bajoStock.length > 0)
      )
    );
  }

  getAlertas(): any {
    return this.alertas;
  }
}
