import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertasService {
  private apiUrl = 'http://localhost:5000/alertas';
  private alertas: any[] = [];

  constructor(private http: HttpClient) {}

  obtenerAlertas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  actualizarAlertas(alertas: any[]): void {
    this.alertas = alertas;
    console.log('Alertas actualizadas:', this.alertas); // Verificación en consola
  }

  hayAlertas(): boolean {
    return this.alertas.length > 0;
  }

  getAlertas(): any[] {
    return this.alertas;
  }
}
