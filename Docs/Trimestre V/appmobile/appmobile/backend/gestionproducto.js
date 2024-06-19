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
const PUERTO = 4013;

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

app.get('/gestionproducto', (_req, res, next) =>{
    const query = 'SELECT * FROM gestionproducto;'
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

app.get('/gestionproductoID/:id', (req, res, next) =>{
    const id = req.params.id;
    const query = 'SELECT * FROM gestionproducto WHERE Producto_idProducto=?';
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


app.post('/gestionproductoAG', (req, res) => {
    const { Persona_idPersona, Producto_idProducto, Estado} = req.body;
    conexion.query("INSERT INTO gestionproducto (Persona_idPersona, Producto_idProducto, Estado) VALUES (?,?,?)",
        [Persona_idPersona, Producto_idProducto, Estado],
        (err, result) => {
            if (err) {
                throw err;
            }
            console.log(req.body);
            res.status(201).json({ "Item añadido": result.affectedRows });
            return;
        });
});


app.delete('/gestionproductoEl/:id',(request,response)=>{
    const id=request.params.id;
    conexion.query("DELETE FROM gestionproducto WHERE Producto_idProducto=?",
    [id],
    (error,results) =>{
        if(error)
        throw error;
    response.status(201).json({"item eliminado":results.affectedRows});
    });
});

app.put('/gestionproductoAc/:id',(req,_res)=>{
    const id = req.params.id;
    const {Estado} = req.body;
    const sql = "UPDATE gestionproducto SET Estado = ? WHERE Producto_idProducto = ?";
    conexion.query(sql,[Estado,id],
        (error,res)=>{
            if(error)
            throw error;
        _res.status(201).json({"Datos actualizados: ":res.affectedRows, "id:":id,})
        })
})

