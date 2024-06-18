import { Component, OnInit } from '@angular/core';
import { ContratoService } from '../contrato.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ContratoModel } from '../contrato.model';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service'; // Asegúrate de importar AuthService

@Component({
  selector: 'app-editar-contrato',
  templateUrl: './editar-contrato.component.html',
  styleUrls: ['./editar-contrato.component.css']
})
export class EditarContratoComponent implements OnInit {

  id: string = '';
  contrato : ContratoModel = new ContratoModel("","","","","",""); 

  constructor(
    private contratoService: ContratoService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService // Inyecta AuthService

  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.contratoService.obtenerContratoPorId(this.id).subscribe(
        data => {
          if (data && data.length > 0) {
            this.contrato = data[0];
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
      this.contratoService.actualizarContrato(this.contrato).subscribe(
        data => {
          Swal.fire({ 
            position: "center",
            icon: "success",
            title: "El contrato se ha actualizado exitosamente",
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['/contrato']);
        },
        error => {
          console.log(error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Hubo un error al actualizar el contrato",
            showConfirmButton: false,
            timer: 1500
          });
        }
      );
    } else {
      console.log('crear');
      this.contratoService.agregarContrato(this.contrato).subscribe(
        data => {
          Swal.fire({ 
            position: "center",
            icon: "success",
            title: "El contrato se ha creado exitosamente",
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['/contrato']); 
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
