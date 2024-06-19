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
const PUERTO = 4016;

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

app.get('/ordenDeSalidaDetallada', (_req, res, next) =>{
    const query = 'SELECT * FROM ordenDeSalidaDetallada;'
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

app.get('/ordenDeSalidaDetalladaID/:id', (req, res, next) =>{
    const id = req.params.id;
    const query = 'SELECT * FROM ordenDeSalidaDetallada WHERE Producto_idProducto=?';
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

app.post('/ordenDeSalidaDetalladaAG', (req, res) => {
    const {Producto_idProducto, ordenDeSalida_idordenDeSalida,Cantidad} = req.body;
    conexion.query("INSERT INTO ordenDeSalidaDetallada (Producto_idProducto, ordenDeSalida_idordenDeSalida,Cantidad) VALUES (?,?,?)",
        [Producto_idProducto, ordenDeSalida_idordenDeSalida,Cantidad],
        (err, result) => {
            if (err) {
                throw err;
            }
            console.log(req.body);
            res.status(201).json({ "Item añadido": result.affectedRows });
            return;
        });
});


app.delete('/ordenDeSalidaDetalladaEl/:id',(request,response)=>{
    const id=request.params.id;
    conexion.query("DELETE FROM ordenDeSalidaDetallada WHERE Producto_idProducto=?",
    [id],
    (error,results) =>{
        if(error)
        throw error;
    response.status(201).json({"item eliminado":results.affectedRows});
    });
});

app.put('/ordenDeSalidaDetalladaAc/:id',(req,_res)=>{
    const id = req.params.id;
    const {Cantidad} = req.body;
    const sql = "UPDATE ordenDeSalidaDetallada SET Cantidad = ? WHERE Producto_idProducto = ?";
    conexion.query(sql,[Cantidad,id],
        (error,res)=>{
            if(error)
            throw error;
        _res.status(201).json({"Datos actualizados: ":res.affectedRows, "id:":id,})
        })
})

