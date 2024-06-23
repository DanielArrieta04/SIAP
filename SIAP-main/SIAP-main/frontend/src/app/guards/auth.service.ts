// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    if (this.authService.isAuth()) {
      // Comprobación de roles
      const allowedRoles = next.data['allowedRoles'] as number[]; // Aseguramos el tipo de allowedRoles
      const userRole = this.authService.getRol();
      
      if (userRole !== null && allowedRoles && allowedRoles.indexOf(userRole) === -1) {
        Swal.fire({
          title: 'Acceso denegado',
          text: 'No tienes permisos para entrar a esta tabla :(',
          icon: 'error'
        }).then(() => {
          this.router.navigate(['/bienvenido']);
        });
        return false;
      }
      
      return true;
    }
    
    Swal.fire({
      title: 'Acceso denegado',
      text: 'Usuario no autenticado. Debe iniciar sesión para acceder a esta función.',
      icon: 'error'
    }).then(() => {
      this.router.navigate(['/bienvenido']);
    });
    return false;
  }
}
