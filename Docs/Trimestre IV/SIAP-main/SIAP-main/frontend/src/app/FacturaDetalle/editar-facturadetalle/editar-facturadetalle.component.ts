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

  facturadetalle: FacturaDetalleModel = new FacturaDetalleModel("", "", "", "","","","");

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
            this.facturadetalle = data[0];
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
      this.facturadetalleService.actualizarFacturaDetalle(this.facturadetalle).subscribe(
        data => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Se ha actualizado exitosamente",
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
            title: "Hubo un error al actualizar",
            showConfirmButton: false,
            timer: 1500
          });
        }
      );
    } else { // Si no hay un ID, entonces estamos creando
      console.log('crear');
      this.facturadetalleService.agregarFacturaDetalle(this.facturadetalle).subscribe(
        data => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Se ha creado exitosamente",
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
            title: "Hubo un error al crear",
            showConfirmButton: false,
            timer: 1500
          });
        }
      );
    }
  }
}
