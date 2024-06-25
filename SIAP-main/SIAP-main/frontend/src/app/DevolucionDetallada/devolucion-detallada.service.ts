import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { DevolucionDetalladaModel } from './devoluciondetallada.model';

@Injectable({
  providedIn: 'root'
})
export class DevolucionDetalladaService {

  BASE_URL = "https://siap-tf6o.onrender.com";

  constructor(private http: HttpClient) { }

  obtenerDevolucionDetallada(): Observable<DevolucionDetalladaModel[]> {
    return this.http.get<DevolucionDetalladaModel[]>(`${this.BASE_URL}/devoluciondetallada`)
      .pipe(
        catchError(this.handleError)
      );
  }

  obtenerDevolucionDetalladaPorId(id: string): Observable<DevolucionDetalladaModel[]> {
    return this.http.get<DevolucionDetalladaModel[]>(`${this.BASE_URL}/devoluciondetalladaID/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  agregarDevolucionDetallada(devoluciondetallada: DevolucionDetalladaModel): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/devoluciondetalladaAG`, devoluciondetallada)
      .pipe(
        catchError(this.handleError)
      );
  }

  actualizarDevolucionDetallada(devoluciondetallada: DevolucionDetalladaModel): Observable<any> {
    const id = devoluciondetallada.Producto_idProducto; 
    return this.http.put<any>(`${this.BASE_URL}/devoluciondetalladaAc/${id}`, devoluciondetallada)
      .pipe(
        catchError(this.handleError)
      );
  }

  borrarDevolucionDetallada(id: string): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}/devoluciondetalladaEl/${id}`)
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
