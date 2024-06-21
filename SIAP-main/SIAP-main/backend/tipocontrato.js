const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();

// Configuración de CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    // Manejo de la solicitud preflight
    if (req.method === 'OPTIONS') {
        res.sendStatus(204);
    } else {
        next();
    }
});
app.use(bodyParser.json());

const PUERTO = process.env.PORT || 4005; // Usar el puerto del entorno si está disponible

const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'siap',
    user: 'root',
    password: '04120413', // Reemplaza con tu contraseña
    port: 3306, // El puerto por defecto de MySQL
});

conexion.connect(error => {
    if (error) {
        console.error('Error al conectar a la base de datos:', error);
    } else {
        console.log('Conectado a la base de datos de Azure');
    }
});

app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto: ${PUERTO}`);
});

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

