import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../proveedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedorModel } from '../proveedor.model';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.css']
})
export class EditarProveedorComponent implements OnInit {

  id: string = '';
  proveedor : ProveedorModel = new ProveedorModel("",""); 

  constructor(
    private proveedorService: ProveedorService,
    private route: ActivatedRoute,
    private router: Router,
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.proveedorService.obtenerProveedorPorId(this.id).subscribe(
        data => {
          if (data && data.length > 0) {
            this.proveedor = data[0];
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
      this.proveedorService.actualizarProveedor(this.proveedor).subscribe(
        data => {
          console.log('proveedor actualizado correctamente:', data);
          Swal.fire({ 
            position: "center",
            icon: "success",
            title: "Rol actualizado exitosamente",
            showConfirmButton: false,
            timer: 1500
          });
          console.log('Redirigiendo a /proveedor');
          this.router.navigate(['/proveedor']); // Redirige de vuelta a la lista de tiendas
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
      this.proveedorService.agregarProveedor(this.proveedor).subscribe(
        data => {
          console.log('proveedor creado correctamente:', data);
          Swal.fire({ 
            position: "center",
            icon: "success",
            title: "EL proveedor se ha creado exitosamente",
            showConfirmButton: false,
            timer: 1500
          });
          console.log('Redirigiendo a /proveedor');
          this.router.navigate(['/proveedor']); 
        },
        error => {
          console.log('Error al crear el proveedor:', error);
          Swal.fire({ 
            position: "center",
            icon: "error",
            title: "Hubo un error al crear el proveedor",
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
