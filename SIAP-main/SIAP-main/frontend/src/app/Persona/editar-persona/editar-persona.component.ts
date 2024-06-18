import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../Login/persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaModel } from '../../Login/persona.model';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {

  id: string = '';
  persona : PersonaModel = new PersonaModel("","","","","","","","","","","","",""); 

  constructor(
    private personaService: PersonaService,
    private route: ActivatedRoute,
    private router: Router,
    private authService : AuthService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.personaService.obtenerPersonaPorId(this.id).subscribe(
        data => {
          if (data && data.length > 0) {
            this.persona = data[0];
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
      this.personaService.actualizarPersona(this.persona).subscribe(
        data => {
          console.log('Persona actualizado correctamente:', data);
          Swal.fire({ 
            position: "center",
            icon: "success",
            title: "persona actualizado exitosamente",
            showConfirmButton: false,
            timer: 1500
          });
          console.log('Redirigiendo a /persona');
          this.router.navigate(['/persona']); 
        },
        error => {
          console.log('Error al actualizar persona:', error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Hubo un error al actualizar persona",
            showConfirmButton: false,
            timer: 1500
          });
        }
      );
    } else {
      console.log('crear');
      this.personaService.agregarPersona(this.persona).subscribe(
        data => {
          console.log('Persona creado correctamente:', data);
          Swal.fire({ 
            position: "center",
            icon: "success",
            title: "EL Persona se ha creado exitosamente",
            showConfirmButton: false,
            timer: 1500
          });
          console.log('Redirigiendo a /persona');
          this.router.navigate(['/persona']); 
        },
        error => {
          console.log('Error al crear el persona:', error);
          Swal.fire({ 
            position: "center",
            icon: "error",
            title: "Hubo un error al crear el persona",
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

