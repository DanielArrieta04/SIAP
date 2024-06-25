const moduleName = "producto";
const conexion = require('./conexion');
function RegisterProducto(app){

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
    const query = `SELECT * FROM ${moduleName} WHERE idProducto=?`;
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
    const { nomProducto,precioProducto,descripcionProducto,fechaVencimiento,cantidadExistente,categoria_idCategorias} = req.body;
    conexion.query(`INSERT INTO ${moduleName} (nomProducto,precioProducto,descripcionProducto,fechaVencimiento,cantidadExistente,categoria_idCategorias) VALUES (?,?,?,?,?,?)`,
        [nomProducto,precioProducto,descripcionProducto,fechaVencimiento,cantidadExistente,categoria_idCategorias],
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
    conexion.query(`DELETE FROM ${moduleName} WHERE idProducto=?`,
    [id],
    (error,results) =>{
        if(error)
        throw error;
    response.status(201).json({"item eliminado":results.affectedRows});
    });
});

app.put(`/${moduleName}/editar/:id`, (req, res, next) => {
    const id = req.params.id;
    const { nomProducto,precioProducto,descripcionProducto,fechaVencimiento,cantidadExistente} = req.body;
    const sql = `UPDATE ${moduleName} SET nomProducto = ?, precioProducto = ?, descripcionProducto = ?, fechaVencimiento = ?, cantidadExistente = ? WHERE idProducto = ?`;
    conexion.query(sql,[ nomProducto,precioProducto,descripcionProducto,fechaVencimiento,cantidadExistente,id],
        (error,res)=>{
            if(error)
            throw error;
        _res.status(201).json({"Datos actualizados: ":res.affectedRows, "id:":id,})
        })
})
}
module.exports = {RegisterProducto};
