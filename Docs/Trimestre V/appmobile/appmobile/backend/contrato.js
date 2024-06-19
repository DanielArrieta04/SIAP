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
const PUERTO = 4006;

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

app.get('/contrato', (_req, res, next) =>{
    const query = 'SELECT * FROM contrato;'
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

app.get('/contratoID/:id', (req, res, next) =>{
    const id = req.params.id;
    const query = 'SELECT * FROM contrato WHERE idContrato=?';
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

app.post('/contratoAG', (req, res) => {
    const { Salario,FechaInicioContrato,FechaFinalContrato,tipoContrato_idtipoContrato,Persona_idPersona} = req.body;
    conexion.query("INSERT INTO contrato (Salario,FechaInicioContrato,FechaFinalContrato,tipoContrato_idtipoContrato,Persona_idPersona) VALUES (?,?,?,?,?)",
        [Salario,FechaInicioContrato,FechaFinalContrato,tipoContrato_idtipoContrato,Persona_idPersona],
        (err, result) => {
            if (err) {
                throw err;
            }
            console.log(req.body);
            res.status(201).json({ "Item añadido": result.affectedRows });
            return;
        });
});


app.delete('/contratoEl/:id',(request,response)=>{
    const id=request.params.id;
    conexion.query("DELETE FROM contrato WHERE idContrato=?",
    [id],
    (error,results) =>{
        if(error)
        throw error;
    response.status(201).json({"item eliminado":results.affectedRows});
    });
});

app.put('/contratoAc/:id',(req,_res)=>{
    const id = req.params.id;
    const {Salario,FechaInicioContrato,FechaFinalContrato} = req.body;
    const sql = "UPDATE contrato SET Salario = ?, FechaInicioContrato = ?, FechaFinalContrato = ? WHERE idContrato = ?";
    conexion.query(sql,[Salario,FechaInicioContrato,FechaFinalContrato,id],
        (error,res)=>{
            if(error)
            throw error;
        _res.status(201).json({"Datos actualizados: ":res.affectedRows, "id:":id,})
        })
})

