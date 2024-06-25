import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { SubCategoriaModel } from './subcategoria.model';

@Injectable({
  providedIn: 'root'
})
export class SubCategoriaService {

  BASE_URL = "https://siap-tf6o.onrender.com";

  constructor(private http: HttpClient) { }

  obtenerSubCategoria(): Observable<SubCategoriaModel[]> {
    return this.http.get<SubCategoriaModel[]>(`${this.BASE_URL}/subcategoria`)
      .pipe(
        catchError(this.handleError)
      );
  }

  obtenerSubCategoriaPorId(id: string): Observable<SubCategoriaModel[]> {
    return this.http.get<SubCategoriaModel[]>(`${this.BASE_URL}/subcategoriaID/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  agregarSubCategoria(subcategoria: SubCategoriaModel): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/subcategoriaAG`, subcategoria)
      .pipe(
        catchError(this.handleError)
      );
  }

  actualizarSubCategoria(subcategoria: SubCategoriaModel): Observable<any> {
    const id = subcategoria.idsubCategoria; // Ajustar según el nombre del campo de ID en tu modelo TiendaModel
    return this.http.put<any>(`${this.BASE_URL}/subcategoriaAc/${id}`, subcategoria)
      .pipe(
        catchError(this.handleError)
      );
  }

  borrarSubCategoria(id: string): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}/subcategoriaEl/${id}`)
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
