const moduleName = "tienda";

function RegisterTienda(app){
    app.get(`/${moduleName}`, (_req, res, next) => {
        const query = `SELECT * FROM ${moduleName};`;
    conexion.query(query, (error, resultado) => {
        if (error) {
            return next(error);
        }
        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.status(404).json({ error: 'No hay registros' });
        }
    });
});

app.get(`/${moduleName}/:id`, (req, res, next) => {
    const id = req.params.id;
    const query = `SELECT * FROM ${moduleName} WHERE idTienda=?`;
    conexion.query(query, [id], (error, resultado) => {
        if (error) {
            return next(error);
        }

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.status(404).json({ error: 'No hay registros de id' });
        }
    });
});

app.post(`/${moduleName}/agregar`, (req, res, next) => {
    const { nombre, direccion } = req.body;
    const query = `INSERT INTO ${moduleName} (nombre, direccion) VALUES (?,?)`;
    conexion.query(query, [nombre, direccion], (err, result) => {
        if (err) {
            return next(err);
        }
        res.status(201).json({ "Item añadido": result.affectedRows });
    });
});

app.delete(`/${moduleName}/borrar/:id`, (req, res, next) => {
    const id = req.params.id;
    const query = `DELETE FROM ${moduleName} WHERE idTienda=?`;
    conexion.query(query, [id], (error, results) => {
        if (error) {
            return next(error);
        }
        res.status(200).json({ "item eliminado": results.affectedRows });
    });
});

app.put(`/${moduleName}/editar/:id`, (req, res, next) => {
    const id = req.params.id;
    const { nombre, direccion } = req.body;
    const query = `UPDATE ${moduleName} SET nombre = ?, direccion = ? WHERE idTienda = ?`;
    conexion.query(query, [nombre, direccion, id], (error, result) => {
        if (error) {
            return next(error);
        }
        res.status(200).json({ "Datos actualizados": result.affectedRows, "id": id });
    });
});

}
module.exports = {RegisterTienda};