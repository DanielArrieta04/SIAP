import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AlertasService {
  BASE_URL = 'https://siap-tf6o.onrender.com';
  private alertas: any = {}; // Variable local para almacenar las alertas

  constructor(private http: HttpClient) {}

  // Método para obtener todas las alertas disponibles y alertas bajo stock
  obtenerAlertas(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}`).pipe(
      catchError(this.handleError)
    );
  }

  // Método para actualizar las alertas locales
  actualizarAlertas(alertas: any): void {
    this.alertas = alertas;
    console.log('Alertas actualizadas en el servicio:', this.alertas);
  }

  // Método para verificar si hay alertas disponibles
  hayAlertas(): boolean {
    return (
      this.alertas &&
      this.alertas.proximosAVencer &&
      this.alertas.proximosAVencer.length > 0 &&
      this.alertas.bajoStock &&
      this.alertas.bajoStock.length > 0
    );
  }

  // Método para obtener todas las alertas almacenadas localmente
  getAlertas(): any {
    return this.alertas;
  }

  // Manejo de errores HTTP genérico
  private handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = 'Error desconocido';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `Error ${error.status}: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
