import { Component, OnInit } from '@angular/core';
import { DevolucionDetalladaService } from '../devolucion-detallada.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DevolucionDetalladaModel } from '../devoluciondetallada.model';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-editar-devoluciondetallada',
  templateUrl: './editar-devoluciondetallada.component.html',
  styleUrls: ['./editar-devoluciondetallada.component.css']
})
export class EditarDevolucionDetalladaComponent implements OnInit {

  id: string = '';
  devoluciondetallada : DevolucionDetalladaModel = new DevolucionDetalladaModel("","","",""); 

  constructor(
    private devoluciondetalladaService: DevolucionDetalladaService,
    private route: ActivatedRoute,
    private router: Router,
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.devoluciondetalladaService.obtenerDevolucionDetalladaPorId(this.id).subscribe(
        data => {
          if (data && data.length > 0) {
            this.devoluciondetallada = data[0];
          }
        },
        error => {
          console.log(error);
        }
      );
    } else {
      console.log("CREAR");
    }
  }

  onSubmit() {
    console.log('onSubmit');
  
    if (this.id) { 
      this.devoluciondetalladaService.actualizarDevolucionDetallada(this.devoluciondetallada).subscribe(
        data => {
          console.log('Devolucion Detallada actualizada correctamente:', data);
          Swal.fire({ 
            position: "center",
            icon: "success",
            title: "La devolucion detallada se ha actualizado exitosamente",
            showConfirmButton: false,
            timer: 1500
          });
          console.log('Redirigiendo a /devoluciondetallada');
          this.router.navigate(['/devoluciondetallada']); 
        },
        error => {
          console.log('Error al actualizar la devoluciondetallada:', error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Hubo un error al actualizar la devoluciondetallada",
            showConfirmButton: false,
            timer: 1500
          });
        }
      );
    } else {
      console.log('crear');
      this.devoluciondetalladaService.agregarDevolucionDetallada(this.devoluciondetallada).subscribe(
        data => {
          console.log('Devolucion Detallada creada correctamente:', data);
          Swal.fire({ 
            position: "center",
            icon: "success",
            title: "La devolucion detallada se ha creado exitosamente",
            showConfirmButton: false,
            timer: 1500
          });
          console.log('Redirigiendo a /devoluciondetallada');
          this.router.navigate(['/devoluciondetallada']); 
        },
        error => {
          console.log('Error al crear la devoluciondetallada:', error);
          Swal.fire({ 
            position: "center",
            icon: "error",
            title: "Hubo un error al crear la devoluciondetallada",
            showConfirmButton: false,
            timer: 1500
          });
        }
      );
    }
  }
  puedeEditar(): boolean {
    const usuario = this.authService.getUser();
    return usuario && usuario.Rol_idRol === 1; // Cambia 1 por el número de rol permitido para editar
  }
}
