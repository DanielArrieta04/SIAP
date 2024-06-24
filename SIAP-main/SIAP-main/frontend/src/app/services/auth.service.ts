import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'https://siapbackend.azurewebsites.net';

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) { }

  singin(user: any): Observable<boolean> {
    return this.http.post<{ token: string, usuario: any }>(`${this.URL}/user/singin`, user)
      .pipe(
        map(response => {
          if (response.token) {
            this.setToken(response.token);
            this.setUser(response.usuario);
            return true;
          } else {
            return false;
          }
        }),
        catchError(() => {
          return of(false);
        })
      );
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  setUser(usuario: any) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUser() {
    return JSON.parse(localStorage.getItem('usuario')!);
  }

  isAuth(): boolean {
    const token = this.getToken();
    return !!token && !this.jwtHelper.isTokenExpired(token);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }

  getRol(): number | null {
    const usuario = this.getUser();
    return usuario ? usuario.Rol_idRol : null;
  }
  
}
