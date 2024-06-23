// Definir interfaces para las alertas
interface AlertaVencimiento {
    idProducto: number;
    nomProducto: string;
    precioProducto: number;
    descripcionProducto: string;
    fechaVencimiento: Date;
    cantidadExistente: number;
    categoria_idCategorias: number;
  }
  
  interface AlertaBajoStock {
    idProducto: number;
    nomProducto: string;
    cantidadExistente: number;
  }
  