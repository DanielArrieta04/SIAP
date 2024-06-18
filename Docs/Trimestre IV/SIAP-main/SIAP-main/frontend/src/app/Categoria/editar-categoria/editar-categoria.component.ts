import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaModel } from '../categoria.model';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service'; // Asegúrate de importar AuthService

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {

  id: string = '';
  categoria : CategoriaModel = new CategoriaModel("",""); 

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.categoriaService.obtenerCategoriaPorId(this.id).subscribe(
        data => {
          if (data && data.length > 0) {
            this.categoria = data[0];
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
      this.categoriaService.actualizarCategoria(this.categoria).subscribe(
        data => {
          Swal.fire({ 
            position: "center",
            icon: "success",
            title: "La categoria se ha actualizado exitosamente",
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['/categoriaAc']);
        },
        error => {
          console.log(error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Hubo un error al actualizar la categoria",
            showConfirmButton: false,
            timer: 1500
          });
        }
      );
    } else {
      console.log('crear');
      this.categoriaService.agregarCategoria(this.categoria).subscribe(
        data => {
          Swal.fire({ 
            position: "center",
            icon: "success",
            title: "La categoria se ha creado exitosamente",
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['/categoriaAG']); 
        },
        error => {
          console.log(error);
          Swal.fire({ 
            position: "center",
            icon: "error",
            title: "Hubo un error al crear la categoria",
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
