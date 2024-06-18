import { Component, OnInit } from '@angular/core';
import { GestionProductoModel } from '../gestionproducto.model';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionProductoService } from '../gestion-producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-gestionproducto',
  templateUrl: './editar-gestionproducto.component.html',
  styleUrls: ['./editar-gestionproducto.component.css']
})

export class EditarGestionProductoComponent implements OnInit {

  id: string = '';

  gestionproducto: GestionProductoModel = new GestionProductoModel("", "", "");

  constructor(
    private gestionproductoService: GestionProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.gestionproductoService.obtenerGestionProductoPorId(this.id).subscribe(
        data => {
          if (data && data.length > 0) {
            this.gestionproducto = data[0];
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
    if (this.id) { // Si hay un ID, entonces estamos editando
      this.gestionproductoService.actualizarGestionProducto(this.gestionproducto).subscribe(
        data => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Se ha actualizado exitosamente",
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['/gestionproducto']);
        },
        error => {
          console.log('Error al actualizar:', error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Hubo un error al actualizar",
            showConfirmButton: false,
            timer: 1500
          });
        }
      );
    } else { // Si no hay un ID, entonces estamos creando
      console.log('crear');
      this.gestionproductoService.agregarGestionProducto(this.gestionproducto).subscribe(
        data => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Se ha creado exitosamente",
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['/gestionproducto']);
        },
        error => {
          console.log(error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Hubo un error al crear",
            showConfirmButton: false,
            timer: 1500
          });
        }
      );
    }
  }
}
