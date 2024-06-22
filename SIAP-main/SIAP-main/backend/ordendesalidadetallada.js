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

const PUERTO = process.env.PORT || 4016; // Usar el puerto del entorno si está disponible

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
        console.log('Conectado a la base de datos');
    }
});

app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto: ${PUERTO}`);
});

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
    const { Producto_idProducto, ordenDeSalida_idordenDeSalida, Cantidad } = req.body;

    conexion.query(
        "CALL InsertarActualizarOrdenSalidaDetallada(?, ?, ?)",
        [Producto_idProducto, ordenDeSalida_idordenDeSalida, Cantidad],
        (error, result) => {
            if (error) {
                console.error('Error al ejecutar el procedimiento almacenado:', error);
                return res.status(500).json({ error: 'Error al procesar la solicitud' });
            }
            res.status(200).json(result); // Opcional: puedes devolver algún mensaje de éxito si lo deseas
        }
    );
});



app.put('/ordenDeSalidaDetalladaAc/:id', (req, res) => {
    const Producto_idProducto = req.params.id;
    const { Cantidad, ordenDeSalida_idordenDeSalida } = req.body;
    console.log('Llegó una solicitud POST a /ordenDeSalidaDetalladaAG');

    if (!ordenDeSalida_idordenDeSalida || !Cantidad || !Producto_idProducto) {
        return res.status(400).json({ error: 'Faltan datos en la solicitud' });
    }

    conexion.beginTransaction((err) => {
        if (err) {
            console.error('Error al iniciar la transacción:', err);
            return res.status(500).json({ error: 'Error al iniciar la transacción' });
        }

        conexion.query(
            "CALL InsertarActualizarOrdenSalidaDetallada(?, ?, ?)",
            [Producto_idProducto, ordenDeSalida_idordenDeSalida, Cantidad],
            (error, result) => {
                if (error) {
                    return conexion.rollback(() => {
                        console.error(error);
                        res.status(500).json({ error: 'Error al procesar la solicitud' });
                    });
                }
                console.log('Resultado de la consulta:', result);

                conexion.commit((err) => {
                    if (err) {
                        return conexion.rollback(() => {
                            console.error('Error al hacer commit:', err);
                            res.status(500).json({ error: 'Error al hacer commit' });
                        });
                    }
                    res.status(200).json({
                        message: "Datos actualizados",
                        "Filas afectadas": result.affectedRows,
                        "Producto_idProducto": Producto_idProducto,
                        "ordenDeSalida_idordenDeSalida": ordenDeSalida_idordenDeSalida
                    });
                });
            }
        );
    });
});

app.delete('/ordenDeSalidaDetalladaEl/:id', (request, response) => {
    const id = request.params.id;
    conexion.query("DELETE FROM ordenDeSalidaDetallada WHERE Producto_idProducto=?",
    [id],
    (error, results) =>{
        if(error) throw error;
        response.status(201).json({"item eliminado":results.affectedRows});
    });
});
