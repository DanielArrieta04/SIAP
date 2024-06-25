import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { DevolucionModel } from './devolucion.model';

@Injectable({
  providedIn: 'root'
})
export class DevolucionService {

  BASE_URL = "https://siap-tf6o.onrender.com";

  constructor(private http: HttpClient) { }

  obtenerDevolucion(): Observable<DevolucionModel[]> {
    return this.http.get<DevolucionModel[]>(`${this.BASE_URL}/devolucion`)
      .pipe(
        catchError(this.handleError)
      );
  }

  obtenerDevolucionPorId(id: string): Observable<DevolucionModel[]> {
    return this.http.get<DevolucionModel[]>(`${this.BASE_URL}/devolucionID/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  agregarDevolucion(devolucion: DevolucionModel): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/devolucionAG`, devolucion)
      .pipe(
        catchError(this.handleError)
      );
  }

  actualizarDevolucion(devolucion: DevolucionModel): Observable<any> {
    const id = devolucion.idDevolucion;
    return this.http.put<any>(`${this.BASE_URL}/devolucionAc/${id}`, devolucion)
      .pipe(
        catchError(this.handleError)
      );
  }

  borrarDevolucion(id: string): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}/devolucionEl/${id}`)
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
