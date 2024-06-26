import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { FacturacompraModel } from './facturacompra.model';

@Injectable({
  providedIn: 'root'
})
export class FacturacompraService {

  BASE_URL = 'https://siap-tf6o.onrender.com';

  constructor(private http: HttpClient) { }

  obtenerFacturacompra(): Observable<FacturacompraModel[]> {
    return this.http.get<FacturacompraModel[]>(`${this.BASE_URL}/facturacompra`)
      .pipe(
        catchError(this.handleError)
      );
  }

  obtenerFacturacompraPorId(id: string): Observable<FacturacompraModel[]> {
    return this.http.get<FacturacompraModel[]>(`${this.BASE_URL}/facturacompra/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  agregarFacturacompra(facturacompra: FacturacompraModel): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/facturacompra/agregar`, facturacompra)
      .pipe(
        catchError(this.handleError)
      );
  }

  actualizarFacturacompra(facturacompra: FacturacompraModel): Observable<any> {
    const id = facturacompra.idFacturaCompra; // Asumiendo que el ID está en idFacturaCompra
    return this.http.put<any>(`${this.BASE_URL}/facturacompra/editar/${id}`, facturacompra)
      .pipe(
        catchError(this.handleError)
      );
  }
  

  borrarFacturacompra(id: string): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}/facturacompra/borrar/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      console.error('Error del lado del cliente:', error.error.message);
    } else {
      // Error del lado del servidor
      console.error('Error del lado del servidor:', error.status, error.message);
    }
    // Retorna un observable vacío para manejar el error
    return of([]);
  }
}
