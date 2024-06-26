const moduleName = "ordenDeSalidaDetallada";
const conexion = require('./conexion');
function RegisterOrdenDeSalidaDetallada(app){

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

app.post(`/${moduleName}/agregar`, (req, res, next) => {
    const { Producto_idProducto, ordenDeSalida_idordenDeSalida, Cantidad } = req.body;
    conexion.query(
        "CALL InsertarActualizarOrdenSalidaDetallada(?, ?, ?)",
        [Producto_idProducto, ordenDeSalida_idordenDeSalida, Cantidad],
        (error, result) => {
            if (error) {
                console.error('Error al ejecutar el procedimiento almacenado:', error);
                return res.status(500).json({ error: 'Error al procesar la solicitud' });
            }
            res.status(200).json(result); 
        }
    );
});



app.put(`/${moduleName}/editar/:id`, (req, res, next) => {
    const Producto_idProducto = req.params.id;
    const { Cantidad, ordenDeSalida_idordenDeSalida } = req.body;
    console.log('Llegó una solicitud POST a /ordenDeSalidaDetalladaAG');

    if (!ordenDeSalida_idordenDeSalida || !Cantidad || !Producto_idProducto) {
        return res.status(400).json({ error: 'Faltan datos en la solicitud' });
    }

    conexion.beginTransaction((err) => {
        if (err) {
            console.error('Error al iniciar la transacción:', err);
            return res.status(500).json({ error: 'Error al iniciar la transacción' });
        }

        conexion.query(
            "CALL InsertarActualizarOrdenSalidaDetallada(?, ?, ?)",
            [Producto_idProducto, ordenDeSalida_idordenDeSalida, Cantidad],
            (error, result) => {
                if (error) {
                    return conexion.rollback(() => {
                        console.error(error);
                        res.status(500).json({ error: 'Error al procesar la solicitud' });
                    });
                }
                console.log('Resultado de la consulta:', result);

                conexion.commit((err) => {
                    if (err) {
                        return conexion.rollback(() => {
                            console.error('Error al hacer commit:', err);
                            res.status(500).json({ error: 'Error al hacer commit' });
                        });
                    }
                    res.status(200).json({
                        message: "Datos actualizados",
                        "Filas afectadas": result.affectedRows,
                        "Producto_idProducto": Producto_idProducto,
                        "ordenDeSalida_idordenDeSalida": ordenDeSalida_idordenDeSalida
                    });
                });
            }
        );
    });
});

app.delete(`/${moduleName}/borrar/:id`, (req, res, next) => {
    const id = req.params.id; // Usar req.params.id para obtener el ID del parámetro de la ruta
    conexion.query(`DELETE FROM ${moduleName} WHERE Producto_idProducto = ?`,
        [id],
        (error, results) => {
            if (error) {
                console.error("Error al borrar el detalle de orden de salida:", error);
                return res.status(500).json({ error: "Error interno del servidor" });
            }
            res.status(201).json({ "item eliminado": results.affectedRows });
        });
});
}
module.exports = {RegisterOrdenDeSalidaDetallada};