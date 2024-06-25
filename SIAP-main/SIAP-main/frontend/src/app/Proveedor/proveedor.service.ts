import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ProveedorModel } from './proveedor.model';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  BASE_URL = "https://siap-tf6o.onrender.com";

  constructor(private http: HttpClient) { }

  obtenerProveedor(): Observable<ProveedorModel[]> {
    return this.http.get<ProveedorModel[]>(`${this.BASE_URL}/proveedor`)
      .pipe(
        catchError(this.handleError)
      );
  }

  obtenerProveedorPorId(id: string): Observable<ProveedorModel[]> {
    return this.http.get<ProveedorModel[]>(`${this.BASE_URL}/proveedorID/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  agregarProveedor(proveedor: ProveedorModel): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/proveedorAG`, proveedor)
      .pipe(
        catchError(this.handleError)
      );
  }

  actualizarProveedor(proveedor: ProveedorModel): Observable<any> {
    const id = proveedor.idProveedor;
    return this.http.put<any>(`${this.BASE_URL}/proveedorAc/${id}`, proveedor)
      .pipe(
        catchError(this.handleError)
      );
  }

  borrarProveedor(id: string): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}/proveedorEl/${id}`)
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
