import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { OrdenDeSalidaModel } from './ordendesalida.model';

@Injectable({
  providedIn: 'root'
})
export class OrdenDeSalidaService {

  BASE_URL = "https://siapbackend.azurewebsites.net";

  constructor(private http: HttpClient) { }

  obtenerOrdenDeSalida(): Observable<OrdenDeSalidaModel[]> {
    return this.http.get<OrdenDeSalidaModel[]>(`${this.BASE_URL}/ordenDeSalida`)
      .pipe(
        catchError(this.handleError)
      );
  }

  obtenerOrdenDeSalidaPorId(id: string): Observable<OrdenDeSalidaModel[]> {
    return this.http.get<OrdenDeSalidaModel[]>(`${this.BASE_URL}/ordenDeSalidaID/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  agregarOrdenDeSalida(ordenDeSalida: OrdenDeSalidaModel): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/ordenDeSalidaAG`, ordenDeSalida)
      .pipe(
        catchError(this.handleError)
      );
  }

  actualizarOrdenDeSalida(ordenDeSalida: OrdenDeSalidaModel): Observable<any> {
    const id = ordenDeSalida.idordenDeSalida; // Ajustar según el nombre del campo de ID en tu modelo TiendaModel
    return this.http.put<any>(`${this.BASE_URL}/ordenDeSalidaAc/${id}`, ordenDeSalida)
      .pipe(
        catchError(this.handleError)
      );
  }

  borrarOrdenDeSalida(id: string): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}/ordenDeSalidaEl/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      console.error('Error del lado del cliente:', error.error.message);
    } else {
      console.error('Error del lado del servidor:', error.status, error.message);
    }
    return of([]);
  }
}
