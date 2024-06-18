import { Component, OnInit } from '@angular/core';
import { DevolucionService } from '../devolucion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DevolucionModel } from '../devolucion.model';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-editar-devolucion',
  templateUrl: './editar-devolucion.component.html',
  styleUrls: ['./editar-devolucion.component.css']
})
export class EditarDevolucionComponent implements OnInit {

  id: string = '';
  devolucion : DevolucionModel = new DevolucionModel("","",""); 

  constructor(
    private devolucionService: DevolucionService,
    private route: ActivatedRoute,
    private router: Router,
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.devolucionService.obtenerDevolucionPorId(this.id).subscribe(
        data => {
          if (data && data.length > 0) {
            this.devolucion = data[0];
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
      this.devolucionService.actualizarDevolucion(this.devolucion).subscribe(
        data => {
          Swal.fire({ 
            position: "center",
            icon: "success",
            title: "La devolucion se ha actualizado exitosamente",
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['/devolucion']);
        },
        error => {
          console.log(error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Hubo un error al actualizar la devolucion",
            showConfirmButton: false,
            timer: 1500
          });
        }
      );
    } else {
      console.log('crear');
      this.devolucionService.agregarDevolucion(this.devolucion).subscribe(
        data => {
          Swal.fire({ 
            position: "center",
            icon: "success",
            title: "La devolucion se ha creado exitosamente",
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['/devolucion']); 
        },
        error => {
          console.log(error);
          Swal.fire({ 
            position: "center",
            icon: "error",
            title: "Hubo un error al crear la devolucion",
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
