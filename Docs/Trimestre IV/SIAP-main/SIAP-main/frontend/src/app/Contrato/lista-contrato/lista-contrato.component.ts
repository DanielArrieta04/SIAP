import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContratoModel } from '../contrato.model';
import { ContratoService } from '../contrato.service';
import Swal from 'sweetalert2';
import { AlertasService } from 'src/app/alertas/alertas.service'; 
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-lista-contrato',
  templateUrl: './lista-contrato.component.html',
  styleUrls: ['./lista-contrato.component.css']
})
export class ListaContratoComponent implements OnInit {

  contratos: Observable<ContratoModel[]> | undefined;

  constructor(private contratoService: ContratoService, private alertasService: AlertasService, private authService: AuthService ) { }

  ngOnInit() {
      this.obtenerContrato();
  }

  obtenerContrato() {
    if (!this.authService.isAuth()) {
      // Si el usuario no está autenticado, redirigirlo a la página de inicio de sesión
      this.authService.logout(); // Otra opción podría ser this.router.navigate(['/login']);
      return;
    }

    this.contratoService.obtenerContrato().subscribe(
      data => {
        console.log("Datos de contrato obtenidos:", data);
        this.contratos =of(data);
      },
      error => {
        console.error("Error al obtener las contrato:", error);
        if (error.status === 403) {
          Swal.fire({
            title: "Acceso denegado",
            text: "No tiene permiso para acceder a esta función.",
            icon: "error"
          });
        }
      }
    );
  }

  borrarContrato(id: string) {
    if (!this.authService.isAuth()) {
      // Redireccionar o mostrar mensaje de error si el usuario no está autenticado
      return;
    }

    const userRole = this.authService.getUser().Rol_idRol; // Obtener el rol del usuario desde el servicio AuthService

    // Verificar permisos basados en el rol del usuario
    if (userRole === 1) {
      console.log("ID de la contrato a eliminar:", id);
      Swal.fire({
        title: "¿Está seguro de que desea eliminar el dato?",
        text: "¡No podrá revertir este cambio!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {
          this.contratoService.borrarContrato(id).subscribe(
            () => {
              Swal.fire({
                title: "¡Eliminado!",
                text: "El registro se ha eliminado con éxito.",
                icon: "success"
              });
              this.obtenerContrato();
            },
            error => {
              console.error("Error al eliminar subcategoria:", error);
              Swal.fire({
                title: "Error",
                text: "Hubo un error al eliminar la subcategoria. Por favor, inténtelo de nuevo más tarde.",
                icon: "error"
              });
            }
          );
        }
      });
    } else {
      // Mostrar mensaje de error o redireccionar si el usuario no tiene permisos suficientes
      console.log("Acceso denegado. Permiso insuficiente.");
    }
  }

  ngOnInitContrato(): void {
    this.obtenerAlertas();
  }

  obtenerAlertas(): void {
    this.alertasService.obtenerAlertas().subscribe(
      (alertas) => {
        this.alertasService.actualizarAlertas(alertas);
      },
      (error) => {
        console.error('Error al obtener alertas:', error);
      }
    );
  }

  hayAlertas(): boolean {
    return this.alertasService.hayAlertas();
  }

  getAlertas(): any[] {
    return this.alertasService.getAlertas();
  }

}
