import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EditarTiendaComponent } from './Tienda/servicios-tienda/editar-tienda/editar-tienda.component';
import { ListaTiendaComponent } from './Tienda/servicios-tienda/lista-tienda/lista-tienda.component';
import { TiendaService } from './Tienda/servicios-tienda/tienda.service';

import { EditarCategoriaComponent } from './Categoria/editar-categoria/editar-categoria.component';
import { ListaCategoriaComponent } from './Categoria/lista-categoria/lista-categoria.component';
import { CategoriaService } from './Categoria/categoria.service';

import { EditarSubCategoriaComponent } from './SubCategoria/editar-subcategoria/editar-subcategoria.component';
import { ListaSubCategoriaComponent } from './SubCategoria/listar-subcategoria/listar-subcategoria.component';
import { SubCategoriaService } from './SubCategoria/subcategoria.service';

import { EditarRolComponent } from './Rol/editar-rol/editar-rol.component';
import { ListaRolComponent } from './Rol/lista-rol/lista-rol.component';
import { RolService } from './Rol/rol.service';

import { ListaTipoDocumentoComponent } from './TipoDocumento/lista-tipodocumento/lista-tipodocumento.component';
import { EditarTipoDocumentoComponent } from './TipoDocumento/editar-tipodocumento/editar-tipodocumento.component';
import { TipoDocumentoService } from './TipoDocumento/tipo-documento.service';

import { ListaPersonaComponent } from './Persona/lista-persona/lista-persona.component';
import { EditarPersonaComponent } from './Persona/editar-persona/editar-persona.component';
import { PersonaService } from './Login/persona.service';

import { EditarTipoContratoComponent } from './TipoContrato/editar-tipocontrato/editar-tipocontrato.component';
import { ListaTipoContratoComponent } from './TipoContrato/lista-tipocontrato/lista-tipocontrato.component';
import { TipoContratoService } from './TipoContrato/tipo-contrato.service';

import { EditarContratoComponent } from './Contrato/editar-contrato/editar-contrato.component';
import { ListaContratoComponent } from './Contrato/lista-contrato/lista-contrato.component';
import { ContratoService } from './Contrato/contrato.service';

import { ListaDevolucionComponent } from './Devolucion/lista-devolucion/lista-devolucion.component';
import { EditarDevolucionComponent } from './Devolucion/editar-devolucion/editar-devolucion.component';
import { DevolucionService } from './Devolucion/devolucion.service';

import { ListaProveedorComponent } from './Proveedor/lista-proveedor/lista-proveedor.component';
import { EditarProveedorComponent } from './Proveedor/editar-proveedor/editar-proveedor.component';
import { ProveedorService } from './Proveedor/proveedor.service';

import { EditarProductoComponent } from './Producto/editar-producto/editar-producto.component';
import { ListaProductoComponent } from './Producto/lista-producto/lista-producto.component';
import { ProductoService } from './Producto/producto.service';

import { ListaFacturacomprasComponent } from './FacturaCompra/lista-facturacompra/lista-facturacompras.component';
import { EditarFacturacomprasComponent } from './FacturaCompra/editar-facturacompra/editar-facturacompra.component';
import { FacturacompraService } from './FacturaCompra/facturacompra.service';

import { EditarFacturaDetalleComponent } from './FacturaDetalle/editar-facturadetalle/editar-facturadetalle.component';
import { ListaFacturaDetalleComponent } from './FacturaDetalle/lista-facturadetalle/lista-facturadetalle.component';
import { FacturaDetalleService } from './FacturaDetalle/factura-detalle.service';

import { EditarGestionProductoComponent } from './GestionProducto/editar-gestionproducto/editar-gestionproducto.component';
import { ListaGestionProductoComponent } from './GestionProducto/lista-gestionproducto/lista-gestionproducto.component';
import { GestionProductoService } from './GestionProducto/gestion-producto.service';

import { EditarOrdenDeSalidaComponent } from './OrdenSalida/editar-ordendesalida/editar-ordendesalida.component';
import { ListaOrdenDeSalidaComponent } from './OrdenSalida/lista-ordendesalida/lista-ordendesalida.component';
import { OrdenDeSalidaService } from './OrdenSalida/ordendesalida.service';

import { EditarOrdenDeSalidaDetalladaComponent } from './OrdenSalidaDetallada/editar-ordendesalidadetallada/editar-ordendesalidadetallada.component';
import { ListaOrdenDeSalidaDetalladaComponent } from './OrdenSalidaDetallada/lista-ordendesalidadetallada/lista-ordendesalidadetallada.component';
import { OrdenDeSalidaDetalladaService } from './OrdenSalidaDetallada/ordendesalidadetallada.service';

import { ListaDevolucionDetalladaComponent } from './DevolucionDetallada/lista-devoluciondetallada/lista-devoluciondetallada.component';
import { EditarDevolucionDetalladaComponent } from './DevolucionDetallada/editar-devoluciondetallada/editar-devoluciondetallada.component';
import { DevolucionDetalladaService } from './DevolucionDetallada/devolucion-detallada.service';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';

import { JwtHelperService, JWT_OPTIONS }  from '@auth0/angular-jwt'
import { TokenInterceptorService } from './services/token-interceptor.service';
import { LoginComponent } from './Login/login.component';
import { FiltroProductosPipe } from './Producto/lista-producto/filtro-productos.pipe';
import { MostrarPerfilComponent } from './mostrar-perfil/mostrar-perfil.component';
import { AlertasComponent } from './alertas/alertas.component';
import { AlertasService } from './alertas/alertas.service';



@NgModule({
  declarations: [
    AppComponent,
    EditarTiendaComponent,
    ListaTiendaComponent,

    EditarCategoriaComponent,
    ListaCategoriaComponent,

    EditarSubCategoriaComponent,
    ListaSubCategoriaComponent,

    EditarRolComponent,
    ListaRolComponent,
    
    ListaTipoDocumentoComponent,
    EditarTipoDocumentoComponent,
    
    ListaPersonaComponent,
    EditarPersonaComponent,

    EditarTipoContratoComponent,
    ListaTipoContratoComponent,

    EditarContratoComponent,
    ListaContratoComponent,

    ListaDevolucionComponent,
    EditarDevolucionComponent,

    ListaProveedorComponent,
    EditarProveedorComponent,

    EditarProductoComponent,
    ListaProductoComponent,

    ListaFacturacomprasComponent,
    EditarFacturacomprasComponent,

    EditarFacturaDetalleComponent,
    ListaFacturaDetalleComponent,

    EditarGestionProductoComponent,
    ListaGestionProductoComponent,

    EditarOrdenDeSalidaComponent,
    ListaOrdenDeSalidaComponent,

    EditarOrdenDeSalidaDetalladaComponent,
    ListaOrdenDeSalidaDetalladaComponent,

    ListaDevolucionDetalladaComponent,
    EditarDevolucionDetalladaComponent,
    BienvenidoComponent,
    LoginComponent,
    FiltroProductosPipe,
    MostrarPerfilComponent,
    AlertasComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
   TiendaService,
    CategoriaService,
    SubCategoriaService,
    RolService,
    TipoDocumentoService,
    PersonaService,
    TipoContratoService,
    ContratoService,
    DevolucionService,
    ProveedorService,
    ProductoService,
    FacturacompraService,
    FacturaDetalleService,
    GestionProductoService,
    OrdenDeSalidaService,
    OrdenDeSalidaDetalladaService,
    DevolucionDetalladaService,
    AlertasService,
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    // Token interceptor
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
