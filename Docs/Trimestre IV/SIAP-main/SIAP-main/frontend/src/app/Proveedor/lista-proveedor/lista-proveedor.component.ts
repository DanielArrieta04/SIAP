import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProveedorModel } from '../proveedor.model';
import { ProveedorService } from '../proveedor.service';
import Swal from 'sweetalert2';
import { AlertasService } from 'src/app/alertas/alertas.service'; // Asegúrate de importar el servicio AlertasService
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-lista-proveedor',
  templateUrl: './lista-proveedor.component.html',
  styleUrls: ['./lista-proveedor.component.css']
})
export class ListaProveedorComponent implements OnInit {

  proveedores: Observable<ProveedorModel[]> | undefined;

  constructor(private proveedorService: ProveedorService, private alertasService: AlertasService, private authService:AuthService) { }

  ngOnInit() {
    this.obtenerProveedor();
  }
  
  obtenerProveedor() {
    if (!this.authService.isAuth()) {
      // Si el usuario no está autenticado, redirigirlo a la página de inicio de sesión
      this.authService.logout(); // Otra opción podría ser this.router.navigate(['/login']);
      return;
    }

    this.proveedorService.obtenerProveedor().subscribe(
      data => {
        console.log("Datos de proveedores obtenidos:", data);
        this.proveedores = of(data);
      },
      error => {
        console.error("Error al obtener las proveedores:", error);
        if (error.status === 403) {
          // Si el backend devuelve un 403 (Permiso denegado), mostrar un mensaje de error
          Swal.fire({
            title: "Acceso denegado",
            text: "No tiene permiso para acceder a esta función.",
            icon: "error"
          });
        }
      }
    );
  }
  
  borrarProveedor(id: string) {
    if (!this.authService.isAuth()) {
      // Redireccionar o mostrar mensaje de error si el usuario no está autenticado
      return;
    }

    const userRole = this.authService.getUser().Rol_idRol; // Obtener el rol del usuario desde el servicio AuthService

    // Verificar permisos basados en el rol del usuario
    if (userRole === 1) {
      console.log("ID de la subcategoria a eliminar:", id);
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
          this.proveedorService.borrarProveedor(id).subscribe(
            () => {
              Swal.fire({
                title: "¡Eliminado!",
                text: "El registro se ha eliminado con éxito.",
                icon: "success"
              });
              this.obtenerProveedor();
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
  ngOnInitProveedor(): void {
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
