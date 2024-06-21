import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdenDeSalidaDetalladaModel } from '../ordendesalidadetallada.model';
import { OrdenDeSalidaDetalladaService } from '../ordendesalidadetallada.service';
import Swal from 'sweetalert2';
import { AlertasService } from 'src/app/alertas/alertas.service';

@Component({
  selector: 'app-lista-ordendesalidadetallada',
  templateUrl: './lista-ordendesalidadetallada.component.html',
  styleUrls: ['./lista-ordendesalidadetallada.component.css']
})
export class ListaOrdenDeSalidaDetalladaComponent implements OnInit {

  ordendesalidadetalladas: OrdenDeSalidaDetalladaModel[] = []; // Ajuste aquí para almacenar los datos

  constructor(
    private ordendesalidadetalladaService: OrdenDeSalidaDetalladaService,
    private alertasService: AlertasService
  ) { }

  ngOnInit() {
    this.cargarOrdenesDeSalidaDetallada();
  }

  cargarOrdenesDeSalidaDetallada() {
    this.ordendesalidadetalladaService.obtenerOrdenDeSalidaDetallada().subscribe({
      next: (data) => this.ordendesalidadetalladas = data,
      error: (error) => console.error('Error al obtener órdenes de salida detallada:', error)
    });
  }

  borrarOrdenDeSalidaDetallada(id: string) {
    Swal.fire({
      title: "¿Está seguro de que desea eliminar este dato?",
      text: "¡No podrá revertir este cambio!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.ordendesalidadetalladaService.borrarOrdenDeSalidaDetallada(id).subscribe(
          data => {
            console.log('Eliminación exitosa:', data);
            Swal.fire({
              title: "¡Eliminado!",
              text: "El registro se ha eliminado con éxito.",
              icon: "success"
            });
            this.cargarOrdenesDeSalidaDetallada(); // Actualiza la lista después de eliminar
          },
          error => {
            console.error('Error al eliminar:', error);
            Swal.fire({
              title: "Error",
              text: "Hubo un problema al eliminar el registro.",
              icon: "error",
              confirmButtonText: "Cerrar"
            });
          }
        );
      }
    });
  }


  obtenerAlertas(): void {
    this.alertasService.obtenerAlertas().subscribe(
      alertas => {
        this.alertasService.actualizarAlertas(alertas);
      },
      error => {
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
