import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ProductoModel } from './producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  BASE_URL = "https://siapbackend.azurewebsites.net";


  constructor(private http: HttpClient) { }

  obtenerProducto(): Observable<ProductoModel[]> {
    return this.http.get<ProductoModel[]>(`${this.BASE_URL}/producto`)
      .pipe(
        catchError(this.handleError)
      );
  }

  obtenerProductos(terminoBusqueda: string): Observable<ProductoModel[]> {
    return this.http.get<ProductoModel[]>(`${this.BASE_URL}/producto?termino=${terminoBusqueda}`)
      .pipe(
        catchError(this.handleError)
      );
  }
  

  agregarProducto(producto: ProductoModel): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/productoAG`, producto)
      .pipe(
        catchError(this.handleError)
      );
  }

  actualizarProducto(producto: ProductoModel): Observable<any> {
    const id = producto.idProducto;
    return this.http.put<any>(`${this.BASE_URL}/productoAc/${id}`, producto)
      .pipe(
        catchError(this.handleError)
      );
  }

  borrarProducto(id: string): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}/productoEl/${id}`)
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
