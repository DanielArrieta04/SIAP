import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdenDeSalidaModel } from '../ordendesalida.model';
import { OrdenDeSalidaService } from '../ordendesalida.service';
import Swal from 'sweetalert2';
import { AlertasService } from 'src/app/alertas/alertas.service'; // Asegúrate de importar el servicio AlertasService

@Component({
  selector: 'app-lista-ordendesalida',
  templateUrl: './lista-ordendesalida.component.html',
  styleUrls: ['./lista-ordendesalida.component.css']
})
export class ListaOrdenDeSalidaComponent implements OnInit {

  ordendesalidas: Observable<OrdenDeSalidaModel[]> | undefined; // Cambio aquí

  constructor(private ordendesalidaService: OrdenDeSalidaService, private alertasService: AlertasService) { }

  ngOnInit() {
      this.ordendesalidas = this.ordendesalidaService.obtenerOrdenDeSalida(); // Cambio aquí
  }

  borrarOrdenDeSalida(id: string) {
    this.ordendesalidaService.borrarOrdenDeSalida(id).subscribe(data => {
      console.log(data);
    })

    Swal.fire({
      title: "¿Esta seguro de que desea eliminar el dato?",
      text: "No podra revertir este cambio!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminado!",
          text: "El registro se ha eliminado con exito.",
          icon: "success"
        })
        setTimeout(() => {
          window.location.reload();
        }, 2000);;
      }
    }
    );

  }

  
ngOnInitOrdenDeSalida(): void {
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
