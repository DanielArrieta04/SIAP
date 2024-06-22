import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { OrdenDeSalidaDetalladaModel } from './ordendesalidadetallada.model';

@Injectable({
  providedIn: 'root'
})
export class OrdenDeSalidaDetalladaService {

  BASE_URL = "http://localhost:4016";

  constructor(private http: HttpClient) { }

  obtenerOrdenDeSalidaDetallada(): Observable<OrdenDeSalidaDetalladaModel[]> {
    return this.http.get<OrdenDeSalidaDetalladaModel[]>(`${this.BASE_URL}/ordenDeSalidaDetallada`).
    pipe(
      catchError(this.handleError)
    )
  }

  obtenerOrdenDeSalidaDetalladaPorId(id: string): Observable<OrdenDeSalidaDetalladaModel[]> {
    return this.http.get<OrdenDeSalidaDetalladaModel[]>(`${this.BASE_URL}/ordenDeSalidaDetalladaID/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  agregarOrdenDeSalidaDetallada(Producto_idProducto: string, ordenDeSalida_idordenDeSalida: string, Cantidad: string): Observable<any> {
    const url = `${this.BASE_URL}/ordenDeSalidaDetalladaAG`; // Ajusta la URL de acuerdo a tu backend
    const body = {
      Producto_idProducto: Producto_idProducto,
      ordenDeSalida_idordenDeSalida: ordenDeSalida_idordenDeSalida,
      Cantidad: Cantidad
    };
    return this.http.post(url, body);
  }


  actualizarOrdenDeSalidaDetallada(ordenDeSalidaDetallada: OrdenDeSalidaDetalladaModel): Observable<any> {
    const id = ordenDeSalidaDetallada.Producto_idProducto;
    return this.http.put<any>(`${this.BASE_URL}/ordenDeSalidaDetalladaAc/${id}`, ordenDeSalidaDetallada)
      .pipe(
        catchError(this.handleError)
      );
  }

  borrarOrdenDeSalidaDetallada(id: string): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}/ordenDeSalidaDetalladaEl/${id}`)
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
