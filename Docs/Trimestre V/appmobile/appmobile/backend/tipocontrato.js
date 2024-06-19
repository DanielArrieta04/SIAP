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
const PUERTO = 4005;

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

app.get('/tipocontrato', (_req, res, next) =>{
    const query = 'SELECT * FROM tipocontrato;'
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

app.get('/tipocontratoID/:id', (req, res, next) =>{
    const id = req.params.id;
    const query = 'SELECT * FROM tipocontrato WHERE idtipoContrato=?';
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

app.post('/tipocontratoAG', (req, res) => {
    const { descripcionTipoContrato} = req.body;
    conexion.query("INSERT INTO tipocontrato (descripcionTipoContrato) VALUES (?)",
        [descripcionTipoContrato],
        (err, result) => {
            if (err) {
                throw err;
            }
            console.log(req.body);
            res.status(201).json({ "Item añadido": result.affectedRows });
            return;
        });
});


app.delete('/tipocontratoEl/:id',(request,response)=>{
    const id=request.params.id;
    conexion.query("DELETE FROM tipocontrato WHERE idtipoContrato=?",
    [id],
    (error,results) =>{
        if(error)
        throw error;
    response.status(201).json({"item eliminado":results.affectedRows});
    });
});

app.put('/tipocontratoAc/:id',(req,_res)=>{
    const id = req.params.id;
    const {descripcionTipoContrato} = req.body;
    const sql = "UPDATE tipocontrato SET descripcionTipoContrato = ? WHERE idtipoContrato = ?";
    conexion.query(sql,[descripcionTipoContrato,id],
        (error,res)=>{
            if(error)
            throw error;
        _res.status(201).json({"Datos actualizados: ":res.affectedRows, "id:":id,})
        })
})

