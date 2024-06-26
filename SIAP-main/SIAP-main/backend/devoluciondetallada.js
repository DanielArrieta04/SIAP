const moduleName = "devoluciondetallada";
const conexion = require('./conexion');
function RegisterDevolucionDetallada(app){

app.get(`/${moduleName}`, (_req, res, next) =>{
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
    const { Devolucion_idDevolucion, Proveedor_idProveedor, Producto_idProducto,CantidadDevolver} = req.body;
    conexion.query(`INSERT INTO ${moduleName} (Devolucion_idDevolucion, Proveedor_idProveedor, Producto_idProducto,CantidadDevolver) VALUES (?,?,?,?)`,
        [Devolucion_idDevolucion, Proveedor_idProveedor, Producto_idProducto,CantidadDevolver],
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
    const sql = `DELETE FROM ${moduleName} WHERE Producto_idProducto = ?`;
    conexion.query(sql, [id], (error, result) => {
      if (error) {
        return next(error);
      }
      res.status(200).json({ "item eliminado": result.affectedRows });
    });
  });

app.put(`/${moduleName}/editar/:id`, (req, res, next) => {
    const id = req.params.id;
    const { CantidadDevolver } = req.body;
    const sql = `UPDATE ${moduleName} SET CantidadDevolver = ? WHERE Producto_idProducto = ?`;
    conexion.query(sql, [CantidadDevolver, id], (error, result) => {
      if (error) {
        return next(error);
      }
      res.status(201).json({ "Datos actualizados": result.affectedRows, "id": id });
    });
  });
}

module.exports = {RegisterDevolucionDetallada};