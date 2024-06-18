import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../tienda.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TiendaModel } from '../tienda.model';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-editar-tienda',
  templateUrl: './editar-tienda.component.html',
  styleUrls: ['./editar-tienda.component.css']
})
export class EditarTiendaComponent implements OnInit {

  id: string = '';
  tienda : TiendaModel = new TiendaModel("","",""); 

  constructor(
    private tiendaService: TiendaService,
    private route: ActivatedRoute,
    private router: Router,
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.tiendaService.obtenerTiendaPorId(this.id).subscribe(
        data => {
          if (data && data.length > 0) {
            this.tienda = data[0];
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
      this.tiendaService.actualizarTienda(this.tienda).subscribe(
        data => {
          console.log('Tienda actualizada correctamente:', data);
          Swal.fire({ 
            position: "center",
            icon: "success",
            title: "La tienda se ha actualizado exitosamente",
            showConfirmButton: false,
            timer: 1500
          });
          console.log('Redirigiendo a /tienda');
          this.router.navigate(['/tienda']); // Redirige de vuelta a la lista de tiendas
        },
        error => {
          console.log('Error al actualizar la tienda:', error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Hubo un error al actualizar la tienda",
            showConfirmButton: false,
            timer: 1500
          });
        }
      );
    } else {
      console.log('crear');
      this.tiendaService.agregarTienda(this.tienda).subscribe(
        data => {
          console.log('Tienda creada correctamente:', data);
          Swal.fire({ 
            position: "center",
            icon: "success",
            title: "La tienda se ha creado exitosamente",
            showConfirmButton: false,
            timer: 1500
          });
          console.log('Redirigiendo a /tienda');
          this.router.navigate(['/tienda']); 
        },
        error => {
          console.log('Error al crear la tienda:', error);
          Swal.fire({ 
            position: "center",
            icon: "error",
            title: "Hubo un error al crear la tienda",
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
