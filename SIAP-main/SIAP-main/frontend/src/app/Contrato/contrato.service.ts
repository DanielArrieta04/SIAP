import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ContratoModel } from './contrato.model';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  BASE_URL = "https://siapbackend.azurewebsites.net";

  constructor(private http: HttpClient) { }

  obtenerContrato(): Observable<ContratoModel[]> {
    return this.http.get<ContratoModel[]>(`${this.BASE_URL}/contrato`)
      .pipe(
        catchError(this.handleError)
      );
  }

  obtenerContratoPorId(id: string): Observable<ContratoModel[]> {
    return this.http.get<ContratoModel[]>(`${this.BASE_URL}/contratoID/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  agregarContrato(contrato: ContratoModel): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/contratoAG`, contrato)
      .pipe(
        catchError(this.handleError)
      );
  }

  actualizarContrato(contrato: ContratoModel): Observable<any> {
    const id = contrato.idContrato;
    return this.http.put<any>(`${this.BASE_URL}/contratoAc/${id}`, contrato)
      .pipe(
        catchError(this.handleError)
      );
  }

  borrarContrato(id: string): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}/contratoEl/${id}`)
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
