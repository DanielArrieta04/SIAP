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
    const id=request.params.id;
    conexion.query(`Delete from ${moduleName} where idsubCategoria=?`,
    [id],
    (error,results) =>{
        if(error)
        throw error;
    response.status(201).json({"item eliminado":results.affectedRows});
    });
});

app.put(`/${moduleName}/editar/:id`, (req, res, next) => {
    const id = req.params.id;
    const {NombreSubCategoria,Categoria_idCategorias} = req.body;
    const sql = `update ${moduleName} set NombreSubCategoria = ?, Categoria_idCategorias = ? where idsubCategoria = ?`;
    conexion.query(sql,[NombreSubCategoria,Categoria_idCategorias,id],
        (error,res)=>{
            if(error)
            throw error;
        _res.status(201).json({"Datos actualizados: ":res.affectedRows, "id:":id,})
        })
})
}
module.exports = {RegisterSubCategoria};