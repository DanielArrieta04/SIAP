import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoModel } from '../producto.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  id: string = '';
  producto : ProductoModel = new ProductoModel("","","","","","",""); 

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.productoService.obtenerProductos(this.id).subscribe(
        data => {
          if (data && data.length > 0) {
            this.producto = data[0];
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
      this.productoService.actualizarProducto(this.producto).subscribe(
        data => {
          console.log('producto actualizado correctamente:', data);
          Swal.fire({ 
            position: "center",
            icon: "success",
            title: "producto actualizado exitosamente",
            showConfirmButton: false,
            timer: 1500
          });
          console.log('Redirigiendo a /producto');
          this.router.navigate(['/producto']); // Redirige de vuelta a la lista de tiendas
        },
        error => {
          console.log('Error al actualizar producto:', error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Hubo un error al actualizar producto",
            showConfirmButton: false,
            timer: 1500
          });
        }
      );
    } else {
      console.log('crear');
      this.productoService.agregarProducto(this.producto).subscribe(
        data => {
          console.log('producto creado correctamente:', data);
          Swal.fire({ 
            position: "center",
            icon: "success",
            title: "EL producto se ha creado exitosamente",
            showConfirmButton: false,
            timer: 1500
          });
          console.log('Redirigiendo a /producto');
          this.router.navigate(['/producto']); 
        },
        error => {
          console.log('Error al crear el producto:', error);
          Swal.fire({ 
            position: "center",
            icon: "error",
            title: "Hubo un error al crear el producto",
            showConfirmButton: false,
            timer: 1500
          });
        }
      );
    }
  }
}
