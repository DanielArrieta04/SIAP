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
const PUERTO = 4003;

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

app.get('/tipodocumento', (_req, res, next) =>{
    const query = 'SELECT * FROM tipodocumento;'
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

app.get('/tipodocumentoID/:id', (req, res, next) =>{
    const id = req.params.id;
    const query = 'SELECT * FROM tipodocumento WHERE idtipoDocumento=?';
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

app.post('/tipodocumentoAG', (req, res) => {
    const { TipoDeDocumento} = req.body;
    conexion.query("INSERT INTO tipodocumento (TipoDeDocumento) VALUES (?)",
        [TipoDeDocumento],
        (err, result) => {
            if (err) {
                throw err;
            }
            console.log(req.body);
            res.status(201).json({ "Item añadido": result.affectedRows });
            return;
        });
});


app.delete('/tipodocumentoEl/:id',(request,response)=>{
    const id=request.params.id;
    conexion.query("Delete from tipodocumento where idtipoDocumento=?",
    [id],
    (error,results) =>{
        if(error)
        throw error;
    response.status(201).json({"item eliminado":results.affectedRows});
    });
});

app.put('/tipodocumentoAc/:id',(req,_res)=>{
    const id = req.params.id;
    const {TipoDeDocumento} = req.body;
    const sql = "update tipodocumento set TipoDeDocumento = ? where idtipoDocumento = ?";
    conexion.query(sql,[TipoDeDocumento,id],
        (error,res)=>{
            if(error)
            throw error;
        _res.status(201).json({"Datos actualizados: ":res.affectedRows, "id:":id,})
        })
})

