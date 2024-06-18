import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductoModel } from '../producto.model';
import { ProductoService } from '../producto.service';
import Swal from 'sweetalert2';
import { AlertasService } from 'src/app/alertas/alertas.service'; // Asegúrate de importar el servicio AlertasService

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  productos: Observable<ProductoModel[]> | undefined;
  terminoBusqueda: string = ''

  constructor(private productoService: ProductoService, private alertasService: AlertasService) { }

  ngOnInit() {
    this.obtenerProducto();
  }
  
  obtenerProducto() {
    this.productoService.obtenerProducto().subscribe(
      data => {
        console.log("Datos de productos obtenidos:", data);
        this.productos = of(data);
      },
      error => {
        console.error("Error al obtener productos:", error);
      }
    );
  }

  obtenerProductos() {
    this.productoService.obtenerProductos(this.terminoBusqueda).subscribe(
      data => {
        console.log("Datos de productos obtenidos:", data);
        this.productos = of(data);
      },
      error => {
        console.error("Error al obtener productos:", error);
      }
    );
  }
  
  
  borrarProducto(id: string) {
    console.log("ID del producto a eliminar:", id);
    Swal.fire({
      title: "¿Está seguro de que desea eliminar el dato?",
      text: "¡No podrá revertir este cambio!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.productoService.borrarProducto(id).subscribe(
          () => {
            Swal.fire({
              title: "¡Eliminado!",
              text: "El registro se ha eliminado con éxito.",
              icon: "success"
            });
            this.obtenerProducto(); 
          },
          error => {
            console.error("Error al eliminar el producto:", error);
            Swal.fire({
              title: "Error",
              text: "Hubo un error al eliminar la producto. Por favor, inténtelo de nuevo más tarde.",
              icon: "error"
            });
          }
        );
      }
    });
  }

  ngOnInitProdcuto(): void {
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
