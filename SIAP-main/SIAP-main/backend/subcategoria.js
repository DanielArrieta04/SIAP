const moduleName = "subcategoria";
const conexion = require('./conexion');
function RegisterSubCategoria(app){

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
    const query = `SELECT * FROM ${moduleName} WHERE idsubCategoria=?`;
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
    const { NombreSubCategoria,Categoria_idCategorias } = req.body;
    conexion.query(`INSERT INTO ${moduleName} (NombreSubCategoria,Categoria_idCategorias) VALUES (?,?)`,
        [NombreSubCategoria,Categoria_idCategorias],
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
    const id = req.params.id;
    conexion.query(`DELETE FROM ${moduleName} WHERE idsubCategoria = ?`, [id], (error, results) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            throw error;
        }
        res.status(201).json({ "item eliminado": results.affectedRows });
    });
});


app.put(`/${moduleName}/editar/:id`, (req, res, next) => {
    const id = req.params.id;
    const { NombreSubCategoria, Categoria_idCategorias } = req.body;
    const sql = `UPDATE ${moduleName} SET NombreSubCategoria = ?, Categoria_idCategorias = ? WHERE idsubCategoria = ?`;
    conexion.query(sql, [NombreSubCategoria, Categoria_idCategorias, id], (error, results) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            throw error;
        }
        res.status(201).json({ "Datos actualizados: ": results.affectedRows, "id:": id });
    });
});

}
module.exports = {RegisterSubCategoria};