import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CategoriaModel } from '../categoria.model';
import { CategoriaService } from '../categoria.service';
import Swal from 'sweetalert2';
import { AlertasService } from 'src/app/alertas/alertas.service'; // Asegúrate de importar el servicio AlertasService
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent implements OnInit {

  categorias: Observable<CategoriaModel[]> | undefined;
  isAdmin = false;

  constructor(private categoriaService: CategoriaService, private alertasService: AlertasService,private authService: AuthService) { }

  ngOnInit() {
      this.obtenerCategoria();
      this.isAdmin = this.authService.getRol() === 1;
  }

  obtenerCategoria() {
    if (!this.authService.isAuth()) {
      // Si el usuario no está autenticado, redirigirlo a la página de inicio de sesión
      this.authService.logout(); // Otra opción podría ser this.router.navigate(['/login']);
      return;
    }

    this.categoriaService.obtenerCategoria().subscribe(
      data => {
        console.log("Datos de categorías obtenidos:", data);
        this.categorias=of(data);
      },
      error => {
        console.error("Error al obtener las subcategorías:", error);
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

  borrarCategoria(id: string) {
    if (!this.authService.isAuth()) {
      return; // Manejar adecuadamente en tu aplicación (redirección o mensaje de error)
    }

    if (!this.isAdmin) {
      console.log("Acceso denegado. Permiso insuficiente.");
      return; // Mostrar mensaje de error o redireccionar si el usuario no es administrador
    }

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
        this.categoriaService.borrarCategoria(id).subscribe(
          () => {
            Swal.fire({
              title: "¡Eliminado!",
              text: "El registro se ha eliminado con éxito.",
              icon: "success"
            });
            this.obtenerCategoria(); // Actualizar la lista después de la eliminación
          },
          error => {
            console.error("Error al eliminar categoría:", error);
            Swal.fire({
              title: "Error",
              text: "Hubo un error al eliminar la categoría. Por favor, inténtelo de nuevo más tarde.",
              icon: "error"
            });
          }
        );
      }
    });
  }

  ngOnInitCategoria(): void {
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
