import { Component, OnInit } from '@angular/core';
import { OrdenDeSalidaService } from '../ordendesalida.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenDeSalidaModel } from '../ordendesalida.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-ordendesalida',
  templateUrl: './editar-ordendesalida.component.html',
  styleUrls: ['./editar-ordendesalida.component.css']
})
export class EditarOrdenDeSalidaComponent implements OnInit {

  id: string = '';
  ordenDeSalida : OrdenDeSalidaModel = new OrdenDeSalidaModel("","",""); 

  constructor(
    private ordendesalidaService: OrdenDeSalidaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.ordendesalidaService.obtenerOrdenDeSalidaPorId(this.id).subscribe(
        data => {
          if (data && data.length > 0) {
            this.ordenDeSalida = data[0];
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
      this.ordendesalidaService.actualizarOrdenDeSalida(this.ordenDeSalida).subscribe(
        data => {
          Swal.fire({ 
            position: "center",
            icon: "success",
            title: "La orden se ha actualizado exitosamente",
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['/ordenDeSalida']);
        },
        error => {
          console.log(error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Hubo un error al actualizar la orden",
            showConfirmButton: false,
            timer: 1500
          });
        }
      );
    } else {
      console.log('crear');
      this.ordendesalidaService.agregarOrdenDeSalida(this.ordenDeSalida).subscribe(
        data => {
          Swal.fire({ 
            position: "center",
            icon: "success",
            title: "La orden se ha creado exitosamente",
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['/ordenDeSalida']); 
        },
        error => {
          console.log(error);
          Swal.fire({ 
            position: "center",
            icon: "error",
            title: "Hubo un error al crear la orden",
            showConfirmButton: false,
            timer: 1500
          });
        }
      );
    }
  }
}
