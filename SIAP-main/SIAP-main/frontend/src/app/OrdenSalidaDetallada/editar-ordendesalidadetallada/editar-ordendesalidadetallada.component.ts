import { Component, OnInit } from '@angular/core';
import { OrdenDeSalidaDetalladaService } from '../ordendesalidadetallada.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenDeSalidaDetalladaModel } from '../ordendesalidadetallada.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-ordendesalidadetallada',
  templateUrl: './editar-ordendesalidadetallada.component.html',
  styleUrls: ['./editar-ordendesalidadetallada.component.css']
})
export class EditarOrdenDeSalidaDetalladaComponent implements OnInit {

  id: string = '';
  ordenDeSalidaDetallada : OrdenDeSalidaDetalladaModel = new OrdenDeSalidaDetalladaModel("","",""); 

  constructor(
    private ordendesalidadetalladaService: OrdenDeSalidaDetalladaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.ordendesalidadetalladaService.obtenerOrdenDeSalidaDetalladaPorId(this.id).subscribe(
        data => {
          if (data && data.length > 0) {
            this.ordenDeSalidaDetallada = data[0];
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
      this.ordendesalidadetalladaService.actualizarOrdenDeSalidaDetallada(this.ordenDeSalidaDetallada).subscribe(
        data => {
          Swal.fire({ 
            position: "center",
            icon: "success",
            title: "La orden detallada se ha actualizado exitosamente",
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['/ordenDeSalidaDetallada']);
        },
        error => {
          console.log(error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Hubo un error al actualizar la orden detallada",
            showConfirmButton: false,
            timer: 1500
          });
        }
      );
    } else {
      console.log('crear');
      this.ordendesalidadetalladaService.agregarOrdenDeSalidaDetallada(this.ordenDeSalidaDetallada).subscribe(
        data => {
          Swal.fire({ 
            position: "center",
            icon: "success",
            title: "La orden detallada se ha creado exitosamente",
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['/ordenDeSalidaDetallada']); 
        },
        error => {
          console.log(error);
          Swal.fire({ 
            position: "center",
            icon: "error",
            title: "Hubo un error al crear la orden detallada",
            showConfirmButton: false,
            timer: 1500
          });
        }
      );
    }
  }
}
