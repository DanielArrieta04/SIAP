const moduleName = "facturadetalle";
const conexion = require('./conexion');
const mysql = require('mysql2/promise');

async function RegisterFacturaDetalle(app){

    app.get(`/${moduleName}`, (_req, res, next) => {
        const query = `SELECT * FROM ${moduleName};`
    conexion.query(query, (error, resultado) =>{
        if(error) {
            return next(error); 
        }
        if(resultado.length > 0) { 
            res.json(resultado);
        } else {
            res.status(404).json({ error: 'No hay registros' }); 
        }
    });
});

app.get(`/${moduleName}/:id`, (req, res, next) => {
    const id = req.params.id;
    const query = `SELECT * FROM ${moduleName} WHERE Producto_idProducto=?`;
    conexion.query(query, [id], (error, resultado) =>{
        if(error) {
            return next(error); 
        }
        if(resultado.length > 0) { 
            res.json(resultado);
        } else {
            res.status(404).json({ error: 'No hay registros de id' }); 
        }
    });
});

    
app.post(`/facturadetalle/agregar`, async (req, res) => {
    console.log('Solicitud POST recibida en /facturadetalle/agregar');
    const productos = req.body.productos;
    console.log('Datos recibidos en el servidor:', productos);
  
    if (!Array.isArray(productos) || productos.length === 0) {
      return res.status(400).json({ error: 'El cuerpo de la solicitud debe contener un arreglo de productos' });
    }
  
    let transaccionError = null;
  
    // Iniciar la transacción
    conexion.beginTransaction(async (err) => {
      if (err) {
        console.error('Error al iniciar la transacción:', err);
        return res.status(500).json({ error: 'Error al iniciar la transacción' });
      }
  
      try {
        for (const producto of productos) {
          const {
            FacturaCompra_idFacturaCompra,
            Producto_idProducto,
            CantidadProductos,
            PrecioCompra,
            nomProducto,
            descripcionProducto,
            fechaVencimiento,
            categoria_idCategorias,
            Persona_idPersona
          } = producto;
  
          // Verificar si el producto existe en la base de datos
          const [rows] = await conexion.query(
            "SELECT COUNT(*) AS count FROM producto WHERE idProducto = ?",
            [Producto_idProducto]
          );
  
          const count = rows[0].count;
  
          if (count === 0) {
            // Insertar el producto si no existe
            await conexion.query(
              "INSERT INTO producto (idProducto, nomProducto, precioProducto, descripcionProducto, fechaVencimiento, cantidadExistente, categoria_idCategorias) VALUES (?, ?, ?, ?, ?, ?, ?)",
              [Producto_idProducto, nomProducto, PrecioCompra, descripcionProducto, fechaVencimiento, CantidadProductos, categoria_idCategorias]
            );
          } else {
            // Actualizar la cantidad existente y la fecha de vencimiento del producto
            await conexion.query(
              "UPDATE producto SET cantidadExistente = cantidadExistente + ?, fechaVencimiento = ? WHERE idProducto = ?",
              [CantidadProductos, fechaVencimiento, Producto_idProducto]
            );
          }
  
          // Insertar en facturadetalle
          await conexion.query(
            "INSERT INTO facturadetalle (FacturaCompra_idFacturaCompra, Producto_idProducto, CantidadProductos, PrecioCompra, nomProducto, descripcionProducto, fechaVencimiento, categoria_idCategorias) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            [FacturaCompra_idFacturaCompra, Producto_idProducto, CantidadProductos, PrecioCompra, nomProducto, descripcionProducto, fechaVencimiento, categoria_idCategorias]
          );
  
          // Insertar en gestionproducto
          await conexion.query(
            "INSERT INTO gestionproducto (Persona_idPersona, Producto_idProducto, Estado) VALUES (?, ?, ?)",
            [Persona_idPersona, Producto_idProducto, 'Añadido']
          );
  
          console.log("Detalle de factura agregado:", producto);
        }
  
        // Confirmar la transacción
        conexion.commit((err) => {
          if (err) {
            console.error('Error al confirmar la transacción:', err);
            transaccionError = err;
          } else {
            console.log('Transacción completada con éxito.');
          }
        });
  
        if (transaccionError) {
          throw transaccionError;
        }
  
        res.status(201).json({ message: 'Detalle de factura(s) agregado(s) correctamente' });
      } catch (err) {
        // Manejar el error y hacer rollback
        console.error('Error durante la transacción:', err);
        conexion.rollback(() => {
          console.error('Rollback realizado.');
        });
        res.status(500).json({ error: 'Error al procesar la transacción' });
      }
    });
  });






app.delete(`/${moduleName}/borrar/:id`, (req, res, next) => {
    const id = req.params.id; // Usando req.params.id para obtener el ID del producto a eliminar
    const sql = `DELETE FROM ${moduleName} WHERE Producto_idProducto = ?`; // Utilizando el parámetro adecuadamente

    conexion.query(sql, [id], (error, results) => {
        if (error) {
            console.error("Error al borrar producto:", error);
            return res.status(500).json({ error: "Error interno del servidor" });
        }

        console.log("Producto eliminado:", id);
        res.status(200).json({ "Producto eliminado": results.affectedRows });
    });
});


app.put(`/${moduleName}/editar/:id`, (req, res, next) => {
    const id = req.params.id;
    const {
        CantidadProductos,
        PrecioCompra,
        nomProducto,
        descripcionProducto,
        fechaVencimiento,
        categoria_idCategorias
    } = req.body;

    const sql = "CALL ActualizarFacturaDetalle(?, ?, ?, ?, ?, ?, ?, ?)";

    conexion.query(sql, [
        id,
        req.body.Producto_idProducto, // Usar req.body.Producto_idProducto aquí
        CantidadProductos,
        PrecioCompra,
        nomProducto,
        descripcionProducto,
        fechaVencimiento,
        categoria_idCategorias
    ], (error, result) => {
        if (error) {
            console.error("Error al actualizar detalle de factura:", error);
            return res.status(500).json({ error: "Error interno del servidor" });
        }
        console.log("Detalle de factura actualizado:", req.body);
        res.status(200).json({ "Datos actualizados": result.affectedRows, "id": id });
    });
});


}

module.exports = {RegisterFacturaDetalle};
