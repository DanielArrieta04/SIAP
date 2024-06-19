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
const PUERTO = 4009;

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

app.get('/producto', (_req, res, next) =>{
    const query = 'SELECT * FROM producto;'
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

app.get('/productoID/:id', (req, res, next) =>{
    const id = req.params.id;
    const query = 'SELECT * FROM producto WHERE idProducto=?';
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

app.post('/productoAG', (req, res) => {
    const { nomProducto,precioProducto,descripcionProducto,fechaVencimiento,cantidadExistente,categoria_idCategorias} = req.body;
    conexion.query("INSERT INTO producto (nomProducto,precioProducto,descripcionProducto,fechaVencimiento,cantidadExistente,categoria_idCategorias) VALUES (?,?,?,?,?,?)",
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


app.delete('/productoEl/:id',(request,response)=>{
    const id=request.params.id;
    conexion.query("DELETE FROM producto WHERE idProducto=?",
    [id],
    (error,results) =>{
        if(error)
        throw error;
    response.status(201).json({"item eliminado":results.affectedRows});
    });
});

app.put('/productoAc/:id',(req,_res)=>{
    const id = req.params.id;
    const { nomProducto,precioProducto,descripcionProducto,fechaVencimiento,cantidadExistente} = req.body;
    const sql = "UPDATE producto SET nomProducto = ?, precioProducto = ?, descripcionProducto = ?, fechaVencimiento = ?, cantidadExistente = ? WHERE idProducto = ?";
    conexion.query(sql,[ nomProducto,precioProducto,descripcionProducto,fechaVencimiento,cantidadExistente,id],
        (error,res)=>{
            if(error)
            throw error;
        _res.status(201).json({"Datos actualizados: ":res.affectedRows, "id:":id,})
        })
})

