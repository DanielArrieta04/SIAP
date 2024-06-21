export class FacturaDetalleModel {

    constructor(
      public FacturaCompra_idFacturaCompra: string,
      public Producto_idProducto: string,
      public CantidadProductos: string,
      public PrecioCompra: string,
      public nomProducto: string,
      public descripcionProducto: string,
      public fechaVencimiento: string,
      public categoria_idCategorias: string
    ) { }
  
  }
  