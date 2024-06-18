export class ProductoModel {
    constructor(
      public idProducto: string,
      public nomProducto: string,
      public precioProducto: string,
      public descripcionProducto: string,
      public fechaVencimiento: string,
      public cantidadExistente: string,
      public categoria_idCategorias: string
    ) { }
  
  }
  