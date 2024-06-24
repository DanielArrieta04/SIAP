import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditarTiendaComponent } from './Tienda/servicios-tienda/editar-tienda/editar-tienda.component';
import { ListaTiendaComponent } from './Tienda/servicios-tienda/lista-tienda/lista-tienda.component';

import { EditarCategoriaComponent } from './Categoria/editar-categoria/editar-categoria.component';
import { ListaCategoriaComponent } from './Categoria/lista-categoria/lista-categoria.component';

import { EditarSubCategoriaComponent } from './SubCategoria/editar-subcategoria/editar-subcategoria.component';
import { ListaSubCategoriaComponent } from './SubCategoria/listar-subcategoria/listar-subcategoria.component';

import { EditarRolComponent } from './Rol/editar-rol/editar-rol.component';
import { ListaRolComponent } from './Rol/lista-rol/lista-rol.component';

import { EditarTipoDocumentoComponent } from './TipoDocumento/editar-tipodocumento/editar-tipodocumento.component';
import { ListaTipoDocumentoComponent } from './TipoDocumento/lista-tipodocumento/lista-tipodocumento.component';

import { EditarPersonaComponent } from './Persona/editar-persona/editar-persona.component';
import { ListaPersonaComponent} from './Persona/lista-persona/lista-persona.component';

import { EditarTipoContratoComponent } from './TipoContrato/editar-tipocontrato/editar-tipocontrato.component';
import { ListaTipoContratoComponent } from './TipoContrato/lista-tipocontrato/lista-tipocontrato.component';

import { EditarContratoComponent } from './Contrato/editar-contrato/editar-contrato.component';
import { ListaContratoComponent } from './Contrato/lista-contrato/lista-contrato.component';

import { EditarDevolucionComponent } from './Devolucion/editar-devolucion/editar-devolucion.component';
import { ListaDevolucionComponent } from './Devolucion/lista-devolucion/lista-devolucion.component';

import { EditarProveedorComponent } from './Proveedor/editar-proveedor/editar-proveedor.component';
import { ListaProveedorComponent } from './Proveedor/lista-proveedor/lista-proveedor.component';

import { EditarProductoComponent } from './Producto/editar-producto/editar-producto.component';
import { ListaProductoComponent } from './Producto/lista-producto/lista-producto.component';

import { ListaFacturacomprasComponent } from './FacturaCompra/lista-facturacompra/lista-facturacompras.component';
import { EditarFacturacomprasComponent } from './FacturaCompra/editar-facturacompra/editar-facturacompra.component';

import { EditarFacturaDetalleComponent } from './FacturaDetalle/editar-facturadetalle/editar-facturadetalle.component';
import { ListaFacturaDetalleComponent } from './FacturaDetalle/lista-facturadetalle/lista-facturadetalle.component';

import { EditarGestionProductoComponent } from './GestionProducto/editar-gestionproducto/editar-gestionproducto.component';
import { ListaGestionProductoComponent } from './GestionProducto/lista-gestionproducto/lista-gestionproducto.component';

import { EditarOrdenDeSalidaComponent } from './OrdenSalida/editar-ordendesalida/editar-ordendesalida.component';
import { ListaOrdenDeSalidaComponent } from './OrdenSalida/lista-ordendesalida/lista-ordendesalida.component';

import { EditarOrdenDeSalidaDetalladaComponent } from './OrdenSalidaDetallada/editar-ordendesalidadetallada/editar-ordendesalidadetallada.component';
import { ListaOrdenDeSalidaDetalladaComponent } from './OrdenSalidaDetallada/lista-ordendesalidadetallada/lista-ordendesalidadetallada.component';

import { EditarDevolucionDetalladaComponent } from './DevolucionDetallada/editar-devoluciondetallada/editar-devoluciondetallada.component';
import { ListaDevolucionDetalladaComponent } from './DevolucionDetallada/lista-devoluciondetallada/lista-devoluciondetallada.component';

import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { LoginComponent } from './Login/login.component';
import { MostrarPerfilComponent } from './mostrar-perfil/mostrar-perfil.component';
import { AlertasComponent } from './alertas/alertas.component';

import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { AuthGuard } from './guards/auth.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: MostrarPerfilComponent, canActivate: [IsLoggedInGuard] },
  { path: 'alertas', component: AlertasComponent, canActivate: [IsLoggedInGuard] },

  { path: 'tienda', component: ListaTiendaComponent, canActivate: [IsLoggedInGuard] },
  { path: 'tiendaAc/:id', component: EditarTiendaComponent, canActivate: [IsLoggedInGuard] },
  { path: 'tiendaAG', component: EditarTiendaComponent, canActivate: [IsLoggedInGuard] },

  {  path: 'categoria', component: ListaCategoriaComponent, canActivate: [AuthGuard],data: { allowedRoles: [1] } },
  { path: 'categoriaAc/:id', component: EditarCategoriaComponent, canActivate: [AuthGuard],data: { allowedRoles: [1] } },
  { path: 'categoriaAG', component: EditarCategoriaComponent, canActivate: [AuthGuard],data: { allowedRoles: [1] } },

  { path: 'subcategoria', component: ListaSubCategoriaComponent, canActivate: [AuthGuard],data: { allowedRoles: [1] }},
  { path: 'subcategoriaAG', component: EditarSubCategoriaComponent, canActivate: [AuthGuard],data: { allowedRoles: [1] } },
  { path: 'subcategoriaAc/:id', component: EditarSubCategoriaComponent, canActivate: [AuthGuard],data: { allowedRoles: [1] } },

  { path: 'rol', component: ListaRolComponent, canActivate: [AuthGuard],data: { allowedRoles: [1] } },
  { path: 'rolAG', component: EditarRolComponent, canActivate: [AuthGuard],data: { allowedRoles: [1] }},
  { path: 'rolAc/:id', component: EditarRolComponent, canActivate: [AuthGuard],data: { allowedRoles: [1] }},

  { path: 'tipodocumento', component: ListaTipoDocumentoComponent, canActivate: [AuthGuard],data: { allowedRoles: [1] }},
  { path: 'tipodocumentoAG', component: EditarTipoDocumentoComponent, canActivate: [AuthGuard],data: { allowedRoles: [1] }},
  { path: 'tipodocumentoAc/:id', component: EditarTipoDocumentoComponent, canActivate: [AuthGuard],data: { allowedRoles: [1] }},

  { path: 'persona', component: ListaPersonaComponent, canActivate: [AuthGuard],data: { allowedRoles: [1] }},
  { path: 'personaAG', component: EditarPersonaComponent, canActivate: [AuthGuard],data: { allowedRoles: [1] }},
  { path: 'personaAc/:id', component: EditarPersonaComponent, canActivate: [AuthGuard],data: { allowedRoles: [1] }},

  { path: 'tipocontrato', component: ListaTipoContratoComponent, canActivate: [AuthGuard],data: { allowedRoles: [1] }},
  { path: 'tipocontratoAG', component: EditarTipoContratoComponent, canActivate: [AuthGuard],data: { allowedRoles: [1] }},
  { path: 'tipocontratoAc/:id', component: EditarTipoContratoComponent, canActivate: [AuthGuard],data: { allowedRoles: [1] }},

  { path: 'contrato', component: ListaContratoComponent, canActivate: [AuthGuard],data: { allowedRoles: [1] } },
  { path: 'contratoAG', component: EditarContratoComponent, canActivate: [AuthGuard],data: { allowedRoles: [1] }},
  { path: 'contratoAc/:id', component: EditarContratoComponent, canActivate: [AuthGuard],data: { allowedRoles: [1] }},

  { path: 'devolucion', component: ListaDevolucionComponent, canActivate: [AuthGuard],data: { allowedRoles: [1] }},
  { path: 'devolucionAG', component: EditarDevolucionComponent, canActivate: [AuthGuard],data: { allowedRoles: [1] }},
  { path: 'devolucionAc/:id', component: EditarDevolucionComponent, canActivate: [AuthGuard],data: { allowedRoles: [1] }},

  { path: 'proveedor', component: ListaProveedorComponent, canActivate: [AuthGuard],data: { allowedRoles: [1] }},
  { path: 'proveedorAG', component: EditarProveedorComponent, canActivate: [AuthGuard],data: { allowedRoles: [1] }},
  { path: 'proveedorAc/:id', component: EditarProveedorComponent, canActivate: [AuthGuard],data: { allowedRoles: [1] }},

  { path: 'producto', component: ListaProductoComponent, canActivate: [IsLoggedInGuard] },
  { path: 'productoAG', component: EditarProductoComponent, canActivate: [IsLoggedInGuard] },
  { path: 'productoAc/:id', component: EditarProductoComponent, canActivate: [IsLoggedInGuard] },

  { path: 'facturacompra', component: ListaFacturacomprasComponent, canActivate: [IsLoggedInGuard] },
  { path: 'facturacompraAG', component: EditarFacturacomprasComponent, canActivate: [IsLoggedInGuard] },
  { path: 'facturacompraAc/:id', component: EditarFacturacomprasComponent, canActivate: [IsLoggedInGuard] },

  { path: 'facturadetalle', component: ListaFacturaDetalleComponent, canActivate: [IsLoggedInGuard] },
  { path: 'facturadetalleAG', component: EditarFacturaDetalleComponent, canActivate: [IsLoggedInGuard] },
  { path: 'facturadetalleAc/:id', component: EditarFacturaDetalleComponent, canActivate: [IsLoggedInGuard] },

  { path: 'gestionproducto', component: ListaGestionProductoComponent, canActivate: [IsLoggedInGuard] },
  { path: 'gestionproductoAG', component: EditarGestionProductoComponent, canActivate: [IsLoggedInGuard] },
  { path: 'gestionproductoAc/:id', component: EditarGestionProductoComponent, canActivate: [IsLoggedInGuard] },

  { path: 'ordenDeSalida', component: ListaOrdenDeSalidaComponent, canActivate: [IsLoggedInGuard] },
  { path: 'ordenDeSalidaAG', component: EditarOrdenDeSalidaComponent, canActivate: [IsLoggedInGuard] },
  { path: 'ordenDeSalidaAc/:id', component: EditarOrdenDeSalidaComponent, canActivate: [IsLoggedInGuard] },

  { path: 'ordenDeSalidaDetallada', component: ListaOrdenDeSalidaDetalladaComponent, canActivate: [IsLoggedInGuard] },
  { path: 'ordenDeSalidaDetalladaAG', component: EditarOrdenDeSalidaDetalladaComponent, canActivate: [IsLoggedInGuard] },
  { path: 'ordenDeSalidaDetalladaAc/:id', component: EditarOrdenDeSalidaDetalladaComponent, canActivate: [IsLoggedInGuard] },

  { path: 'devoluciondetallada', component: ListaDevolucionDetalladaComponent, canActivate: [AuthGuard],data: { allowedRoles: [1] }},
  { path: 'devoluciondetalladaAG', component: EditarDevolucionDetalladaComponent, canActivate: [AuthGuard],data: { allowedRoles: [1] }},
  { path: 'devoluciondetalladaAc/:id', component: EditarDevolucionDetalladaComponent, canActivate: [AuthGuard],data: { allowedRoles: [1] }},

  { path: 'bienvenido', component: BienvenidoComponent},

  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
