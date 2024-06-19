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
const PUERTO = 4010;

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

app.get('/facturacompra', (_req, res, next) =>{
    const query = 'SELECT * FROM facturacompra;'
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

app.get('/facturacompraID/:id', (req, res, next) =>{
    const id = req.params.id;
    const query = 'SELECT * FROM facturacompra WHERE idFacturaCompra=?';
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

app.post('/facturacompraAG', (req, res) => {
    const { observacionesCompra, fechaCompra, producto_idProducto} = req.body;
    conexion.query("INSERT INTO facturacompra (observacionesCompra, fechaCompra, producto_idProducto) VALUES (?,?,?)",
        [observacionesCompra, fechaCompra, producto_idProducto],
        (err, result) => {
            if (err) {
                throw err;
            }
            console.log(req.body);
            res.status(201).json({ "Item añadido": result.affectedRows });
            return;
        });
});


app.delete('/facturacompraEl/:id',(request,response)=>{
    const id=request.params.id;
    conexion.query("DELETE FROM facturacompra WHERE idFacturaCompra=?",
    [id],
    (error,results) =>{
        if(error)
        throw error;
    response.status(201).json({"item eliminado":results.affectedRows});
    });
});

app.put('/facturacompraAc/:id',(req,_res)=>{
    const id = req.params.id;
    const {observacionesCompra, fechaCompra} = req.body;
    const sql = "UPDATE facturacompra SET observacionesCompra = ?, fechaCompra = ? WHERE idFacturaCompra = ?";
    conexion.query(sql,[observacionesCompra, fechaCompra,id],
        (error,res)=>{
            if(error)
            throw error;
        _res.status(201).json({"Datos actualizados: ":res.affectedRows, "id:":id,})
        })
})

