const moduleName = "facturacompra";
const conexion = require('./conexion');
function RegisterFacturaCompra(app){

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
    const query = `SELECT * FROM ${moduleName} WHERE idFacturaCompra=?`;
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
    const { idFacturaCompra,observacionesCompra, fechaCompra, proveedor_idProveedor } = req.body;
    conexion.query(`INSERT INTO ${moduleName} (idFacturaCompra,observacionesCompra, fechaCompra, proveedor_idProveedor) VALUES (?,?,?,?)`,
        [idFacturaCompra,observacionesCompra, fechaCompra, proveedor_idProveedor ],
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
    conexion.query(`DELETE FROM ${moduleName} WHERE idFacturaCompra=?`,
    [id],
    (error,results) =>{
        if(error)
        throw error;
    response.status(201).json({"item eliminado":results.affectedRows});
    });
});

app.put(`/${moduleName}/editar/:id`, (req, res) => {
    const id = req.params.id;
    const { observacionesCompra, fechaCompra, proveedor_idProveedor } = req.body;
    const sql = `UPDATE ${moduleName} SET observacionesCompra = ?, fechaCompra = ?, proveedor_idProveedor = ? WHERE idFacturaCompra = ?`;
    conexion.query(sql, [observacionesCompra, fechaCompra, proveedor_idProveedor, id], (error, result) => {
        if (error) {
            console.error('Error al actualizar la factura de compra: ' + error.stack);
            res.status(500).json({ error: 'Ocurrió un error al actualizar la factura de compra' });
            return;
        }
        res.status(200).json({ message: `Factura de compra con id ${id} actualizada correctamente` });
    });
});

}

module.exports = {RegisterFacturaCompra};