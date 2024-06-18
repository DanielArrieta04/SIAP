import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { TipoDocumentoModel } from './tipodocumento.model';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService 
{

  BASE_URL = "http://localhost:4003";

  constructor(private http: HttpClient) { }

  obtenerTipoDocumento(): Observable<TipoDocumentoModel[]> {
    return this.http.get<TipoDocumentoModel[]>(`${this.BASE_URL}/tipodocumento`)
      .pipe(
        catchError(this.handleError)
      );
  }

  obtenerTipoDocumentoPorId(id: string): Observable<TipoDocumentoModel[]> {
    return this.http.get<TipoDocumentoModel[]>(`${this.BASE_URL}/tipodocumentoID/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  agregarTipoDocumento(tipodocumento: TipoDocumentoModel): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/tipodocumentoAG`, tipodocumento)
      .pipe(
        catchError(this.handleError)
      );
  }

  actualizarTipoDocumento(tipodocumento: TipoDocumentoModel): Observable<any> {
    const id = tipodocumento.idtipoDocumento;
    return this.http.put<any>(`${this.BASE_URL}/tipodocumentoAc/${id}`, tipodocumento)
      .pipe(
        catchError(this.handleError)
      );
  }

  borrarTipoDocumento(id: string): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}/tipodocumentoEl/${id}`)
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
