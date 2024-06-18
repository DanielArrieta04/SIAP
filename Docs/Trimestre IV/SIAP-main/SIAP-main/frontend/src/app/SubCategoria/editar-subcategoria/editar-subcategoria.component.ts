import { Component, OnInit } from '@angular/core';
import { SubCategoriaService } from '../subcategoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SubCategoriaModel } from '../subcategoria.model';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service'; // Asegúrate de importar AuthService

@Component({
  selector: 'app-editar-subcategoria',
  templateUrl: './editar-subcategoria.component.html',
  styleUrls: ['./editar-subcategoria.component.css']
})
export class EditarSubCategoriaComponent implements OnInit {

  id: string = '';
  subcategoria: SubCategoriaModel = new SubCategoriaModel('', '', '');

  constructor(
    private subcategoriaService: SubCategoriaService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService // Inyecta AuthService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log('EDITAR');
      this.subcategoriaService.obtenerSubCategoriaPorId(this.id).subscribe(
        data => {
          if (data && data.length > 0) {
            this.subcategoria = data[0];
          }
        },
        error => {
          console.log(error);
        }
      );
    } else {
      console.log('CREAR');
    }
  }

  onSubmit() {
    console.log('onSubmit');
  
    if (this.id) { // Edición de subcategoría existente
      this.subcategoriaService.actualizarSubCategoria(this.subcategoria).subscribe(
        data => {
          console.log('Subcategoría actualizada correctamente:', data);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'La subcategoría se ha actualizado exitosamente',
            showConfirmButton: false,
            timer: 1500
          });
          console.log('Redirigiendo a /subcategoria');
          this.router.navigate(['/subcategoria']); // Redirige de vuelta a la lista de subcategorías
        },
        error => {
          console.log('Error al actualizar la subcategoría:', error);
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Hubo un error al actualizar la subcategoría',
            showConfirmButton: false,
            timer: 1500
          });
        }
      );
    } else { // Creación de nueva subcategoría
      console.log('crear');
      this.subcategoriaService.agregarSubCategoria(this.subcategoria).subscribe(
        data => {
          console.log('Subcategoría creada correctamente:', data);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'La subcategoría se ha creado exitosamente',
            showConfirmButton: false,
            timer: 1500
          });
          console.log('Redirigiendo a /subcategoria');
          this.router.navigate(['/subcategoria']); // Redirige de vuelta a la lista de subcategorías
        },
        error => {
          console.log('Error al crear la subcategoría:', error);
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Hubo un error al crear la subcategoría',
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
