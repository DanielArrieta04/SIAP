import { Component, OnInit } from '@angular/core';
import { FacturaDetalleModel } from '../facturadetalle.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FacturaDetalleService } from '../factura-detalle.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-facturadetalle',
  templateUrl: './editar-facturadetalle.component.html',
  styleUrls: ['./editar-facturadetalle.component.css']
})
export class EditarFacturaDetalleComponent implements OnInit {

  id: string = '';
  facturadetalles: FacturaDetalleModel[] = [];

  constructor(
    private facturadetalleService: FacturaDetalleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      // Modo edición: obtener detalles existentes por ID
      this.facturadetalleService.obtenerFacturaDetallePorId(this.id).subscribe(
        data => {
          if (data && data.length > 0) {
            this.facturadetalles = data;
          }
        },
        error => {
          console.log('Error al obtener detalles:', error);
        }
      );
    } else {
      // Modo creación: inicializar con un detalle vacío
      this.agregarDetalle();
    }
  }

  agregarDetalle() {
    this.facturadetalles.push(new FacturaDetalleModel("", "", "", "", "", "", "", "", ""));
  }

  eliminarDetalle(index: number) {
    this.facturadetalles.splice(index, 1);
  }

  onSubmit() {
    console.log('Datos a enviar:', this.facturadetalles);

    if (this.id) {
      // Modo edición: actualizar detalles existentes
      this.facturadetalles.forEach(detalle => {
        if (detalle.Producto_idProducto && detalle.FacturaCompra_idFacturaCompra) {
          this.facturadetalleService.actualizarFacturaDetalle(detalle).subscribe(
            data => {
              console.log('Detalle actualizado:', data);
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Detalle actualizado exitosamente",
                showConfirmButton: false,
                timer: 1500
              });
              this.router.navigate(['/facturadetalle']);
            },
            error => {
              console.log('Error al actualizar detalle:', error);
              Swal.fire({
                position: "center",
                icon: "error",
                title: "Error al actualizar detalle",
                showConfirmButton: false,
                timer: 1500
              });
            }
          );
        } else {
          console.log('Error: Producto_idProducto y FacturaCompra_idFacturaCompra son obligatorios para la actualización');
        }
      });
    } else {
      // Modo creación: agregar nuevos detalles
      this.facturadetalleService.agregarFacturaDetalle(this.facturadetalles).subscribe(
        data => {
          console.log('Detalles agregados:', data);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Detalles agregados exitosamente",
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['/facturadetalle']);
        },
        error => {
          console.log('Error al agregar detalles:', error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Error al agregar detalles",
            showConfirmButton: false,
            timer: 1500
          });
        }
      );
    }
  }
}
