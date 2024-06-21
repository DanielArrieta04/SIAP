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

const PUERTO = process.env.PORT || 4000; // Usar el puerto del entorno si está disponible

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

app.get('/categoria', (_req, res, next) =>{
    const query = 'SELECT * FROM categoria;'
    conexion.query(query, (error, resultado) =>{
        if(error) {
            return next(error); // Pasar el error al siguiente middleware de manejo de errores
        }
        
        if(resultado.length > 0) { // Verificar si hay registros
            res.json(resultado);
        } else {
            res.status(404).json({ error: 'No hay registros' }); // Devolver un estado 404 si no hay registros
        }
    });
});

app.get('/categoriaID/:id', (req, res, next) =>{
    const id = req.params.id;
    const query = 'SELECT * FROM categoria WHERE idCategorias=?';
    conexion.query(query, [id], (error, resultado) =>{
        if(error) {
            return next(error); // Pasar el error al siguiente middleware de manejo de errores
        }
        
        if(resultado.length > 0) { // Verificar si hay registros
            res.json(resultado);
        } else {
            res.status(404).json({ error: 'No hay registros de id' }); // Devolver un estado 404 si no hay registros
        }
    });
});

app.post('/categoriaAG', (req, res) => {
    const { nombreCategoria } = req.body;
    conexion.query("INSERT INTO categoria (nombreCategoria) VALUES (?)",
        [nombreCategoria],
        (err, result) => {
            if (err) {
                throw err;
            }
            console.log(req.body);
            res.status(201).json({ "Item añadido": result.affectedRows });
            return;
        });
});


app.delete('/categoriaEl/:id',(request,response)=>{
    const id=request.params.id;
    conexion.query("Delete from categoria where idCategorias=?",
    [id],
    (error,results) =>{
        if(error)
        throw error;
        console.log(req.body);
    response.status(201).json({"item eliminado":results.affectedRows});
    });
});

app.put('/categoriaAc/:id',(req,_res)=>{
    const id = req.params.id;
    const {nombreCategoria} = req.body;
    const sql = "update categoria set nombreCategoria = ? where idCategorias = ?";
    conexion.query(sql,[nombreCategoria,id],
        (error,res)=>{
            if(error)
            throw error;
        _res.status(201).json({"Datos actualizados: ":res.affectedRows, "id:":id,})
        })
})