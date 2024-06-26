import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { FacturaDetalleModel } from './facturadetalle.model';

@Injectable({
  providedIn: 'root'
})
export class FacturaDetalleService {

  BASE_URL = 'https://siap-tf6o.onrender.com';

  constructor(private http: HttpClient) { }

  obtenerFacturaDetalle(): Observable<FacturaDetalleModel[]> {
    return this.http.get<FacturaDetalleModel[]>(`${this.BASE_URL}/facturadetalle`)
      .pipe(
        catchError(this.handleError)
      );
  }

  obtenerFacturaDetallePorId(id: string): Observable<FacturaDetalleModel[]> {
    return this.http.get<FacturaDetalleModel[]>(`${this.BASE_URL}/facturadetalle/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  agregarFacturaDetalle(facturaDetalles: FacturaDetalleModel[]): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/facturadetalle/agregar`, { productos: facturaDetalles })
        .pipe(
            catchError(this.handleError)
        );
}

  
  actualizarFacturaDetalle(facturadetalle: FacturaDetalleModel): Observable<any> {
    const id = facturadetalle.FacturaCompra_idFacturaCompra; // Asumiendo que el ID está en FacturaCompra_idFacturaCompra
    return this.http.put<any>(`${this.BASE_URL}/facturadetalle/editar/${id}`, facturadetalle)
      .pipe(
        catchError(this.handleError)
      );
  }

  borrarFacturaDetalle(id: string): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}/facturadetalle/borrar/${id}`)
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
