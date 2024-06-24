import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { TipoContratoModel } from './tipocontrato-model';

@Injectable({
  providedIn: 'root'
})
export class TipoContratoService {

  BASE_URL = "https://siapbackend.azurewebsites.net";

  constructor(private http: HttpClient) { }

  obtenerTipoContrato(): Observable<TipoContratoModel[]> {
    return this.http.get<TipoContratoModel[]>(`${this.BASE_URL}/tipocontrato`)
      .pipe(
        catchError(this.handleError)
      );
  }

  obtenerTipoContratoPorId(id: string): Observable<TipoContratoModel[]> {
    return this.http.get<TipoContratoModel[]>(`${this.BASE_URL}/tipocontratoID/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  agregarTipoContrato(tipocontrato: TipoContratoModel): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/tipocontratoAG`, tipocontrato)
      .pipe(
        catchError(this.handleError)
      );
  }

  actualizarTipoContrato(tipocontrato: TipoContratoModel): Observable<any> {
    const id = tipocontrato.idtipoContrato;
    return this.http.put<any>(`${this.BASE_URL}/tipocontratoAc/${id}`, tipocontrato)
      .pipe(
        catchError(this.handleError)
      );
  }

  borrarTipoContrato(id: string): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}/tipocontratoEl/${id}`)
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
