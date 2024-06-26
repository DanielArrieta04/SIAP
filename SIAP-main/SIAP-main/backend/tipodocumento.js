const moduleName = "tipodocumento";
const conexion = require('./conexion');
function RegisterTipoDocumento(app){

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
    const query = `SELECT * FROM ${moduleName} WHERE idtipoDocumento=?`;
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
    const { TipoDeDocumento} = req.body;
    conexion.query(`INSERT INTO ${moduleName} (TipoDeDocumento) VALUES (?)`,
        [TipoDeDocumento],
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
    conexion.query(`DELETE FROM ${moduleName} WHERE idtipoDocumento=?`, [id], (error, results) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            throw error;
        }
        res.status(201).json({ "item eliminado": results.affectedRows });
    });
});


app.put(`/${moduleName}/editar/:id`, (req, res, next) => {
    const id = req.params.id;
    const { TipoDeDocumento } = req.body;
    const sql = `UPDATE ${moduleName} SET TipoDeDocumento = ? WHERE idtipoDocumento = ?`;
    conexion.query(sql, [TipoDeDocumento, id], (error, result) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            throw error;
        }
        res.status(201).json({ "Datos actualizados": result.affectedRows, "id": id });
    });
});

}
module.exports = {RegisterTipoDocumento};
