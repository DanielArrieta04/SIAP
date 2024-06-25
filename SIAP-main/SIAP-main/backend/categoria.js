const moduleName = "categoria";
const conexion = require('./conexion');
function RegisterCategoria(app){
// -- LISTAR CATEGORIA --
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

// -- LISTAR MEDIANTE ID --
app.get(`/${moduleName}/:id`, (req, res, next) => {
    const id = req.params.id;
    const query = `SELECT * FROM ${moduleName} WHERE idCategorias=?;`;
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

// -- AGREGAR CATEGORIA --
app.post(`/${moduleName}/agregar`, (req, res, next) => {
    const { nombreCategoria } = req.body;
    const query = `INSERT INTO ${moduleName} (nombreCategoria) VALUES (?);`;
    conexion.query(query, [nombreCategoria], (err, result) => {
        if (err) {
            return next(err); 
        }
        res.status(201).json({ "Item añadido": result.affectedRows });
    });
});

// -- ELIMINAR CATEGORIA --
app.delete(`/${moduleName}/borrar/:id`, (req, res, next) => {
    const id = req.params.id;
    const query = `DELETE FROM  WHERE idCategorias=?;`;
    conexion.query(query, [id], (error, results) => {
        if (error) {
            return next(error); 
        }
        res.status(201).json({ "item eliminado": results.affectedRows });
    });
});

// -- ACTUALIZAR CATEGORIA --
app.put(`/${moduleName}/editar/:id`, (req, res, next) => {
    const id = req.params.id;
    const { nombreCategoria } = req.body;
    const query = `UPDATE ${moduleName} SET nombreCategoria = ? WHERE idCategorias = ?;`;
    conexion.query(query, [nombreCategoria, id], (error, result) => {
        if (error) {
            return next(error);
        }
        res.status(201).json({ "Datos actualizados: ": result.affectedRows, "id:": id });
    });
});
}
module.exports = {RegisterCategoria};