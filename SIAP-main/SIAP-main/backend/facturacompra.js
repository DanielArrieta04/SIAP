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

const PUERTO = process.env.PORT || 4010; // Usar el puerto del entorno si está disponible

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
    const { idFacturaCompra,observacionesCompra, fechaCompra, proveedor_idProveedor } = req.body;
    conexion.query("INSERT INTO facturacompra (idFacturaCompra,observacionesCompra, fechaCompra, proveedor_idProveedor) VALUES (?,?,?,?)",
        [idFacturaCompra,observacionesCompra, fechaCompra, proveedor_idProveedor ],
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
    const {observacionesCompra, fechaCompra,proveedor_idProveedor} = req.body;
    const sql = "UPDATE facturacompra SET observacionesCompra = ?, fechaCompra = ?, proveedor_idProveedor = ? WHERE idFacturaCompra = ?";
    conexion.query(sql,[observacionesCompra, fechaCompra,proveedor_idProveedor,id],
        (error,res)=>{
            if(error)
            throw error;
        _res.status(201).json({"Datos actualizados: ":res.affectedRows, "id:":id,})
        })
})

