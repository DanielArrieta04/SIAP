import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { CategoriaModel } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  BASE_URL = 'https://siap-tf6o.onrender.com';

  constructor(private http: HttpClient) { }

  obtenerCategoria(): Observable<CategoriaModel[]> {
    return this.http.get<CategoriaModel[]>(`${this.BASE_URL}/categoria`)
      .pipe(
        catchError(this.handleError)
      );
  }

  obtenerCategoriaPorId(id: string): Observable<CategoriaModel[]> {
    return this.http.get<CategoriaModel[]>(`${this.BASE_URL}/categoriaID/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  agregarCategoria(categoria: CategoriaModel): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/categoriaAG`, categoria)
      .pipe(
        catchError(this.handleError)
      );
  }

  actualizarCategoria(categoria: CategoriaModel): Observable<any> {
    const id = categoria.idCategorias;
    return this.http.put<any>(`${this.BASE_URL}/categoriaAc/${id}`, categoria)
      .pipe(
        catchError(this.handleError)
      );
  }

  borrarCategoria(id: string): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}/categoriaEl/${id}`)
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
