export class OrdenDeSalidaDetalladaModel {
  Producto_idProducto: string;
  ordenDeSalida_idordenDeSalida: string;
  Cantidad: string;

  constructor(Producto_idProducto: string, ordenDeSalida_idordenDeSalida: string, Cantidad: string) {
    this.Producto_idProducto = Producto_idProducto;
    this.ordenDeSalida_idordenDeSalida = ordenDeSalida_idordenDeSalida;
    this.Cantidad = Cantidad;
  }
}
