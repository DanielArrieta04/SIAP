import { Component, OnInit } from '@angular/core';
import { TipoContratoService } from '../tipo-contrato.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoContratoModel } from '../tipocontrato-model';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-editar-tipocontrato',
  templateUrl: './editar-tipocontrato.component.html',
  styleUrls: ['./editar-tipocontrato.component.css']
})
export class EditarTipoContratoComponent implements OnInit {

  id: string = '';
  tipocontrato : TipoContratoModel = new TipoContratoModel("",""); 

  constructor(
    private tipocontratoService: TipoContratoService,
    private route: ActivatedRoute,
    private router: Router,
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.tipocontratoService.obtenerTipoContratoPorId(this.id).subscribe(
        data => {
          if (data && data.length > 0) {
            this.tipocontrato = data[0];
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
      this.tipocontratoService.actualizarTipoContrato(this.tipocontrato).subscribe(
        data => {
          console.log('Tipo contrato actualizado correctamente:', data);
          Swal.fire({ 
            position: "center",
            icon: "success",
            title: "Tipo contrato actualizado exitosamente",
            showConfirmButton: false,
            timer: 1500
          });
          console.log('Redirigiendo a /tipocontrato');
          this.router.navigate(['/tipocontrato']); // Redirige de vuelta a la lista de tiendas
        },
        error => {
          console.log('Error al actualizar tipocontrato:', error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Hubo un error al actualizar tipocontrato",
            showConfirmButton: false,
            timer: 1500
          });
        }
      );
    } else {
      console.log('crear');
      this.tipocontratoService.agregarTipoContrato(this.tipocontrato).subscribe(
        data => {
          console.log('Tipo contrato creado correctamente:', data);
          Swal.fire({ 
            position: "center",
            icon: "success",
            title: "EL tipo contrato se ha creado exitosamente",
            showConfirmButton: false,
            timer: 1500
          });
          console.log('Redirigiendo a /tipocontrato');
          this.router.navigate(['/tipocontrato']); 
        },
        error => {
          console.log('Error al crear el tipocontrato:', error);
          Swal.fire({ 
            position: "center",
            icon: "error",
            title: "Hubo un error al crear el tipocontrato",
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
