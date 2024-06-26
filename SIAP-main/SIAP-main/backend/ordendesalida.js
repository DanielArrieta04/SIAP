const moduleName = "ordenDeSalida";
const conexion = require('./conexion');
function RegisterOrdenDeSalida(app){
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
    const query = `SELECT * FROM ${moduleName} WHERE idordenDeSalida=?`;
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
    const { fechaSalida, tienda_idTienda } = req.body;

    // Validación de los datos recibidos
    if (!fechaSalida || !tienda_idTienda) {
        return res.status(400).json({ error: "Los campos fechaSalida y tienda_idTienda son obligatorios" });
    }

    // Ejecución de la consulta SQL para inserción
    conexion.query(`INSERT INTO ${moduleName} (fechaSalida, tienda_idTienda) VALUES (?, ?)`,
        [fechaSalida, tienda_idTienda],
        (err, result) => {
            if (err) {
                console.error("Error al añadir item:", err);
                return res.status(500).json({ error: "Error interno del servidor" });
            }

            console.log("Item añadido:", result.insertId); // Muestra el ID del nuevo registro insertado
            res.status(201).json({ "Item añadido": result.affectedRows });
        });
});



app.delete(`/${moduleName}/borrar/:id`, (req, res, next) => {
    const id = req.params.id;
    conexion.query(`DELETE FROM ${moduleName} WHERE idordenDeSalida = ?`,
        [id],
        (error, results) => {
            if (error) {
                console.error("Error al borrar ordenDeSalida:", error);
                return res.status(500).json({ error: "Error interno del servidor" });
            }

            console.log("Orden de salida eliminada:", id);
            res.status(200).json({ "Item eliminado": results.affectedRows });
        });
});

app.put(`/${moduleName}/editar/:id`, (req, res, next) => {
    const id = req.params.id;
    const { fechaSalida, tienda_idTienda } = req.body;
    const sql = `UPDATE ${moduleName} SET fechaSalida = ?, tienda_idTienda = ? WHERE idordenDeSalida = ?`;
    conexion.query(sql, [fechaSalida, tienda_idTienda, id], (error, result) => {
        if (error) {
            console.error("Error al actualizar ordenDeSalida:", error);
            return res.status(500).json({ error: "Error interno del servidor" });
        }

        console.log("Datos actualizados en ordenDeSalida:", id);
        res.status(200).json({ "Datos actualizados": result.affectedRows, "id": id });
    });
});
}
module.exports = {RegisterOrdenDeSalida};