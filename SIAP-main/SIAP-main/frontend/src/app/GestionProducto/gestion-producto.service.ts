import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { GestionProductoModel } from './gestionproducto.model';

@Injectable({
  providedIn: 'root'
})
export class GestionProductoService {

  BASE_URL = "hhttps://siap-tf6o.onrender.com";

  constructor(private http: HttpClient) { }

  obtenerGestionProducto(): Observable<GestionProductoModel[]> {
    return this.http.get<GestionProductoModel[]>(`${this.BASE_URL}/gestionproducto`)
      .pipe(
        catchError(this.handleError)
      );
  }

  obtenerGestionProductoPorId(id: string): Observable<GestionProductoModel[]> {
    return this.http.get<GestionProductoModel[]>(`${this.BASE_URL}/gestionproductoID/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  agregarGestionProducto(gestionproducto: GestionProductoModel): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/gestionproductoAG`, gestionproducto)
      .pipe(
        catchError(this.handleError)
      );
  }

  actualizarGestionProducto(gestionproducto: GestionProductoModel): Observable<any> {
    const id = gestionproducto.Producto_idProducto; // Asumiendo que el ID está en idFacturaCompra
    return this.http.put<any>(`${this.BASE_URL}/gestionproductoAc/${id}`, gestionproducto)
      .pipe(
        catchError(this.handleError)
      );
  }
  

  borrarGestionProducto(id: string): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}/gestionproductoEl/${id}`)
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
