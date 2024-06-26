const moduleName = "proveedor";
const conexion = require('./conexion');
function RegisterProveedor(app){

    app.get(`/${moduleName}`, (_req, res, next) => {
        const query =`SELECT * FROM ${moduleName};`
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
    const query = `SELECT * FROM ${moduleName} WHERE idProveedor=?`;
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
    const { NombreEmpresa} = req.body;
    conexion.query(`INSERT INTO ${moduleName} (NombreEmpresa) VALUES (?)`,
        [NombreEmpresa],
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
    conexion.query(`DELETE FROM ${moduleName} WHERE idProveedor = ?`, [id], (error, results) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            return res.status(500).json({ error: 'Error al procesar la solicitud' });
        }
        res.status(200).json({ "item eliminado": results.affectedRows });
    });
});


app.put(`/${moduleName}/editar/:id`, (req, res, next) => {
    const id = req.params.id;
    const { NombreEmpresa } = req.body;
    const sql = `UPDATE ${moduleName} SET NombreEmpresa = ? WHERE idProveedor = ?`;
    
    conexion.query(sql, [NombreEmpresa, id], (error, result) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            return res.status(500).json({ error: 'Error al procesar la solicitud' });
        }
        
        // Si llegamos aquí, significa que la actualización fue exitosa
        res.status(200).json({
            message: 'Datos actualizados correctamente',
            affectedRows: result.affectedRows,
            id: id
        });
    });
});

}
module.exports = {RegisterProveedor};