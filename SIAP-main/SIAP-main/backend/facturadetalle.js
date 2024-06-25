const moduleName = "facturadetalle";

function RegisterFacturaDetalle(app){

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
    const query = `SELECT * FROM ${moduleName} WHERE FacturaCompra_idFacturaCompra=?`;
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

    
app.post(`/${moduleName}/agregar`, (req, res, next) => {
    console.log('Solicitud POST recibida en /facturadetalleAG');
    const productos = req.body.productos;
    console.log('Datos recibidos en el servidor:', productos);

    if (!Array.isArray(productos) || productos.length === 0) {
        return res.status(400).json({ error: 'El cuerpo de la solicitud debe contener un arreglo de productos' });
    }

    conexion.beginTransaction(err => {
        if (err) {
            console.error('Error al iniciar la transacción:', err);
            return res.status(500).json({ error: 'Error al iniciar la transacción' });
        }

        productos.forEach(producto => {
            const sql = "CALL InsertarFacturaDetalle(?, ?, ?, ?, ?, ?, ?, ?, ?)";
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

            if (typeof Persona_idPersona === 'undefined' || Persona_idPersona === null) {
                conexion.rollback(() => {
                    return res.status(400).json({ error: 'Persona_idPersona es requerido' });
                });
                return;
            }

            conexion.query(sql, [
                FacturaCompra_idFacturaCompra,
                Producto_idProducto,
                CantidadProductos,
                PrecioCompra,
                nomProducto,
                descripcionProducto,
                fechaVencimiento,
                categoria_idCategorias,
                Persona_idPersona
            ], (err, result) => {
                if (err) {
                    conexion.rollback(() => {
                        console.error("Error al insertar detalle de factura:", err);
                        return res.status(500).json({ error: 'Error al insertar detalle de factura' });
                    });
                } else {
                    console.log("Detalle de factura agregado:", producto);
                }
            });
        });

        conexion.commit(err => {
            if (err) {
                conexion.rollback(() => {
                    console.error('Error al hacer commit de la transacción:', err);
                    return res.status(500).json({ error: 'Error al hacer commit de la transacción' });
                });
            } else {
                res.status(201).json({ message: 'Productos agregados exitosamente' });
            }
        });
    });
});

app.delete(`/${moduleName}/borrar/:id`, (req, res, next) => {
    const id=request.params.id;
    conexion.query(`DELETE FROM ${moduleName} WHERE FacturaCompra_idFacturaCompra=?`,
    [id],
    (error,results) =>{
        if(error)
        throw error;
    response.status(201).json({"item eliminado":results.affectedRows});
    });
});

app.put(`/${moduleName}/editar/:id`, (req, res, next) => {
    const id = req.params.id;
    const {
        FacturaCompra_idFacturaCompra,
        Producto_idProducto,
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
        FacturaCompra_idFacturaCompra,
        Producto_idProducto,
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
