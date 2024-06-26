const moduleName = "gestionproducto";
const conexion = require('./conexion');
function RegisterGestionProducto(app){

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
    const { Persona_idPersona, Producto_idProducto, Estado} = req.body;
    conexion.query(`INSERT INTO ${moduleName} (Persona_idPersona, Producto_idProducto, Estado) VALUES (?,?,?)`,
        [Persona_idPersona, Producto_idProducto, Estado],
        (err, result) => {
            if (err) {
                throw err;
            }
            console.log(req.body);
            res.status(201).json({ "Item añadido": result.affectedRows });
            return;
        });
});


app.delete(`/${moduleName}/borrar/:id`, (req, res, next) => {
    const id = req.params.id; // Aquí es donde obtienes el parámetro de la URL correctamente
    const sql = `DELETE FROM ${moduleName} WHERE Persona_idPersona = ? AND Producto_idProducto = ?`;

    conexion.query(sql, [id, id], (error, results) => {
        if (error) {
            console.error("Error al borrar la gestion:", error);
            return res.status(500).json({ error: "Error interno del servidor" });
        }

        console.log("Gestion eliminada:", id);
        res.status(200).json({ "Gestion eliminada": results.affectedRows });
    });
});


app.put(`/${moduleName}/editar/:id`, (req, res, next) => {
    const id = req.params.id;
    const { Estado } = req.body; // Suponiendo que solo se actualiza el campo Estado

    if (!Estado) {
        return res.status(400).json({ error: "El campo Estado es obligatorio" });
    }

    // Verificar que el valor de Estado sea uno de los valores permitidos ('Añadido', 'Actualizado', 'Eliminado')
    if (!['Añadido', 'Actualizado', 'Eliminado'].includes(Estado)) {
        return res.status(400).json({ error: "El valor de Estado debe ser 'Añadido', 'Actualizado' o 'Eliminado'" });
    }

    const sql = `UPDATE ${moduleName} SET Estado = ? WHERE Persona_idPersona = ? AND Producto_idProducto = ?`;

    conexion.query(sql, [Estado, id, id], (error, result) => {
        if (error) {
            console.error("Error al actualizar estado en gestionproducto:", error);
            return res.status(500).json({ error: "Error interno del servidor" });
        }

        console.log("Estado actualizado en gestionproducto:", id);
        res.status(200).json({ "Datos actualizados": result.affectedRows, "id": id });
    });
});



}
module.exports = {RegisterGestionProducto};