import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { RolModel } from './rol.model';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  BASE_URL = 'https://siap-tf6o.onrender.com';

  constructor(private http: HttpClient) { }

  obtenerRol(): Observable<RolModel[]> {
    return this.http.get<RolModel[]>(`${this.BASE_URL}/rol`)
      .pipe(
        catchError(this.handleError)
      );
  }

  obtenerRolPorId(id: string): Observable<RolModel[]> {
    return this.http.get<RolModel[]>(`${this.BASE_URL}/rol/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  agregarRol(rol: RolModel): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/rol/agregar`, rol)
      .pipe(
        catchError(this.handleError)
      );
  }

  actualizarRol(rol: RolModel): Observable<any> {
    const id = rol.idRol;
    return this.http.put<any>(`${this.BASE_URL}/rol/editar/${id}`, rol)
      .pipe(
        catchError(this.handleError)
      );
  }

  borrarRol(id: string): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}/rol/borrar/${id}`)
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
