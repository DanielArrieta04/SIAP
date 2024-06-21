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
  facturadetalles: FacturaDetalleModel[] = []; // Array para almacenar múltiples detalles de factura

  constructor(
    private facturadetalleService: FacturaDetalleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.facturadetalleService.obtenerFacturaDetallePorId(this.id).subscribe(
        data => {
          if (data && data.length > 0) {
            this.facturadetalles = data; // Asignar los detalles recuperados a la lista
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

  agregarDetalle() {
    this.facturadetalles.push(new FacturaDetalleModel("", "", "", "", "", "", "", "")); // Agregar un nuevo detalle vacío
  }

  eliminarDetalle(index: number) {
    this.facturadetalles.splice(index, 1); // Eliminar el detalle en la posición `index`
  }

  onSubmit() {
    console.log('Datos a enviar:', this.facturadetalles); // Verificar los datos antes de enviar la solicitud POST
    this.facturadetalleService.agregarFacturaDetalle(this.facturadetalles).subscribe(
      data => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Se han creado exitosamente los detalles",
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/facturadetalle']);
      },
      error => {
        console.log(error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Hubo un error al crear los detalles",
          showConfirmButton: false,
          timer: 1500
        });
      }
    );
  }
}
