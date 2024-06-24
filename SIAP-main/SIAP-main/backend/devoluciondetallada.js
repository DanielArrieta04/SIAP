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

const PUERTO = process.env.PORT || 4011; // Usar el puerto del entorno si está disponible

const conexion = mysql.createConnection({
    host: 'bdsiap.mysql.database.azure.com',
    user: 'siapadmin',
    password: 'Pollitos123456.', // Reemplaza con tu contraseña
    database: 'bdsiap', // Nombre de tu base de datos en Azure
    port: 3306 // El puerto por defecto de MySQL
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

app.get('/devoluciondetallada', (_req, res, next) =>{
    const query = 'SELECT * FROM devoluciondetallada;'
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

app.get('/devoluciondetalladaID/:id', (req, res, next) =>{
    const id = req.params.id;
    const query = 'SELECT * FROM devoluciondetallada WHERE Producto_idProducto=?';
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

app.post('/devoluciondetalladaAG', (req, res) => {
    const { Devolucion_idDevolucion, Proveedor_idProveedor, Producto_idProducto,CantidadDevolver} = req.body;
    conexion.query("INSERT INTO devoluciondetallada (Devolucion_idDevolucion, Proveedor_idProveedor, Producto_idProducto,CantidadDevolver) VALUES (?,?,?,?)",
        [Devolucion_idDevolucion, Proveedor_idProveedor, Producto_idProducto,CantidadDevolver],
        (err, result) => {
            if (err) {
                throw err;
            }
            console.log(req.body);
            res.status(201).json({ "Item añadido": result.affectedRows });
            return;
        });
});


app.delete('/devoluciondetalladaEl/:id',(request,response)=>{
    const id=request.params.id;
    conexion.query("DELETE FROM devoluciondetallada WHERE Producto_idProducto=?",
    [id],
    (error,results) =>{
        if(error)
        throw error;
    response.status(201).json({"item eliminado":results.affectedRows});
    });
});

app.put('/devoluciondetalladaAc/:id',(req,_res)=>{
    const id = req.params.id;
    const {CantidadDevolver} = req.body;
    const sql = "UPDATE devoluciondetallada SET CantidadDevolver = ? WHERE Producto_idProducto = ?";
    conexion.query(sql,[CantidadDevolver,id],
        (error,res)=>{
            if(error)
            throw error;
        _res.status(201).json({"Datos actualizados: ":res.affectedRows, "id:":id,})
        })
})

