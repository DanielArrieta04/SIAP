import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { PersonaModel } from './persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  BASE_URL = "https://siapbackend.azurewebsites.net";

  constructor(private http: HttpClient) { }

  obtenerPersona(): Observable<PersonaModel[]> {
    return this.http.get<PersonaModel[]>(`${this.BASE_URL}/persona`)
      .pipe(
        catchError(this.handleError)
      );
  }

  obtenerPersonaPorId(id: string): Observable<PersonaModel[]> {
    return this.http.get<PersonaModel[]>(`${this.BASE_URL}/personaID/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  agregarPersona(persona: PersonaModel): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/personaAG`, persona)
      .pipe(
        catchError(this.handleError)
      );
  }

  actualizarPersona(persona: PersonaModel): Observable<any> {
    const id = persona.idPersona;
    return this.http.put<any>(`${this.BASE_URL}/personaAc/${id}`, persona)
      .pipe(
        catchError(this.handleError)
      );
  }

  borrarPersona(id: string): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}/personaEl/${id}`)
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
