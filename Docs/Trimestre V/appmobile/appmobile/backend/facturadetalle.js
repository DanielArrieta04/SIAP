const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const { error } = require("console");

const app = express();

app.use(function (_req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

app.use(bodyParser.json());
const PUERTO = 4012;

const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'siap',
    user: 'root',
    password: ''
});

app.listen(PUERTO, () => {
    console.log('Puerto:', PUERTO);
});

conexion.connect(error =>{
    if(error) throw error
    console.log('Conectado a la base de datos');
})

app.get('/facturadetalle', (_req, res, next) =>{
    const query = 'SELECT * FROM facturadetalle;'
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

app.get('/facturadetalleID/:id', (req, res, next) =>{
    const id = req.params.id;
    const query = 'SELECT * FROM facturadetalle WHERE FacturaCompra_idFacturaCompra=?';
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

app.post('/facturadetalleAG', (req, res) => {
    const { Proveedor_idProveedor, FacturaCompra_idFacturaCompra, CantidadProductos, PrecioCompra} = req.body;
    conexion.query("INSERT INTO facturadetalle (Proveedor_idProveedor, FacturaCompra_idFacturaCompra, CantidadProductos, PrecioCompra) VALUES (?,?,?,?)",
        [Proveedor_idProveedor, FacturaCompra_idFacturaCompra, CantidadProductos, PrecioCompra],
        (err, result) => {
            if (err) {
                throw err;
            }
            console.log(req.body);
            res.status(201).json({ "Item añadido": result.affectedRows });
            return;
        });
});


app.delete('/facturadetalleEl/:id',(request,response)=>{
    const id=request.params.id;
    conexion.query("DELETE FROM facturadetalle WHERE FacturaCompra_idFacturaCompra=?",
    [id],
    (error,results) =>{
        if(error)
        throw error;
    response.status(201).json({"item eliminado":results.affectedRows});
    });
});

app.put('/facturadetalleAc/:id',(req,_res)=>{
    const id = req.params.id;
    const {CantidadProductos, PrecioCompra} = req.body;
    const sql = "UPDATE facturadetalle SET CantidadProductos = ?, PrecioCompra = ? WHERE FacturaCompra_idFacturaCompra = ?";
    conexion.query(sql,[CantidadProductos, PrecioCompra,id],
        (error,res)=>{
            if(error)
            throw error;
        _res.status(201).json({"Datos actualizados: ":res.affectedRows, "id:":id,})
        })
})

