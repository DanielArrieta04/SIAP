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
    const id = req.params.id;

    // Llamada al procedimiento almacenado delete_producto_and_update_gestionproducto
    const sql = 'CALL borrarProducto(?)';
    conexion.query(sql, [id], (error, results) => {
        // El procedimiento almacenado devuelve un mensaje, puedes enviarlo como respuesta
        res.status(200).json({ message: results[0][0].message });
    });
});

app.put(`/${moduleName}/editar/:id`, (req, res, next) => {
    const id = req.params.id;
    const { nomProducto, precioProducto, descripcionProducto, fechaVencimiento, cantidadExistente } = req.body;
    const sql = `UPDATE ${moduleName} SET nomProducto = ?, precioProducto = ?, descripcionProducto = ?, fechaVencimiento = ?, cantidadExistente = ? WHERE idProducto = ?`;
    conexion.query(sql, [nomProducto, precioProducto, descripcionProducto, fechaVencimiento, cantidadExistente, id],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(201).json({ "Datos actualizados: ": result.affectedRows, "id:": id });
        });
});

}
module.exports = {RegisterProducto};
