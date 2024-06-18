import { Component, OnInit } from '@angular/core';
import { RolService } from '../rol.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RolModel } from '../rol.model';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-editar-rol',
  templateUrl: './editar-rol.component.html',
  styleUrls: ['./editar-rol.component.css']
})
export class EditarRolComponent implements OnInit {

  id: string = '';
  rol : RolModel = new RolModel("",""); 

  constructor(
    private rolService: RolService,
    private route: ActivatedRoute,
    private router: Router,
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.rolService.obtenerRolPorId(this.id).subscribe(
        data => {
          if (data && data.length > 0) {
            this.rol = data[0];
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
      this.rolService.actualizarRol(this.rol).subscribe(
        data => {
          console.log('Rol actualizado correctamente:', data);
          Swal.fire({ 
            position: "center",
            icon: "success",
            title: "Rol actualizado exitosamente",
            showConfirmButton: false,
            timer: 1500
          });
          console.log('Redirigiendo a /rol');
          this.router.navigate(['/rol']); // Redirige de vuelta a la lista de tiendas
        },
        error => {
          console.log('Error al actualizar rol:', error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Hubo un error al actualizar rol",
            showConfirmButton: false,
            timer: 1500
          });
        }
      );
    } else {
      console.log('crear');
      this.rolService.agregarRol(this.rol).subscribe(
        data => {
          console.log('Rol creado correctamente:', data);
          Swal.fire({ 
            position: "center",
            icon: "success",
            title: "EL rol se ha creado exitosamente",
            showConfirmButton: false,
            timer: 1500
          });
          console.log('Redirigiendo a /rol');
          this.router.navigate(['/rol']); 
        },
        error => {
          console.log('Error al crear el rol:', error);
          Swal.fire({ 
            position: "center",
            icon: "error",
            title: "Hubo un error al crear el rol",
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
