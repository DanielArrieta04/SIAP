import { Component, OnInit } from '@angular/core';
import { TipoDocumentoService } from '../tipo-documento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoDocumentoModel } from '../tipodocumento.model';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-editar-tipodocumento',
  templateUrl: './editar-tipodocumento.component.html',
  styleUrls: ['./editar-tipodocumento.component.css']
})
export class EditarTipoDocumentoComponent implements OnInit {

  id: string = '';
  tipodocumento : TipoDocumentoModel = new TipoDocumentoModel("",""); 

  constructor(
    private tipodocumentoService: TipoDocumentoService,
    private route: ActivatedRoute,
    private router: Router,
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.tipodocumentoService.obtenerTipoDocumentoPorId(this.id).subscribe(
        data => {
          if (data && data.length > 0) {
            this.tipodocumento = data[0];
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
      this.tipodocumentoService.actualizarTipoDocumento(this.tipodocumento).subscribe(
        data => {
          console.log('Tipo de documento actualizado correctamente:', data);
          Swal.fire({ 
            position: "center",
            icon: "success",
            title: "Tipo de documento actualizado exitosamente",
            showConfirmButton: false,
            timer: 1500
          });
          console.log('Redirigiendo a /tipodocumento');
          this.router.navigate(['/tipodocumento']); // Redirige de vuelta a la lista de tiendas
        },
        error => {
          console.log('Error al actualizar tipo de documento:', error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Hubo un error al actualizar tipo de documento",
            showConfirmButton: false,
            timer: 1500
          });
        }
      );
    } else {
      console.log('crear');
      this.tipodocumentoService.agregarTipoDocumento(this.tipodocumento).subscribe(
        data => {
          console.log('Tipo de documento creado correctamente:', data);
          Swal.fire({ 
            position: "center",
            icon: "success",
            title: "EL tipo de documento se ha creado exitosamente",
            showConfirmButton: false,
            timer: 1500
          });
          console.log('Redirigiendo a /tipodocumento');
          this.router.navigate(['/tipodocumento']); 
        },
        error => {
          console.log('Error al crear el tipodocumento:', error);
          Swal.fire({ 
            position: "center",
            icon: "error",
            title: "Hubo un error al crear el tipodocumento",
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
