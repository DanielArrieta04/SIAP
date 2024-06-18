import { Pipe, PipeTransform } from '@angular/core';
import { ProductoModel } from '../producto.model';

@Pipe({
  name: 'filtroProductos'
})
export class FiltroProductosPipe implements PipeTransform {
  transform(productos: ProductoModel[] | null, terminoBusqueda: string): ProductoModel[] | null {
    if (!productos || !terminoBusqueda) {
      return productos;
    }

    return productos.filter(producto =>
      producto.nomProducto.toLowerCase().includes(terminoBusqueda.toLowerCase())
    );
  }
}
